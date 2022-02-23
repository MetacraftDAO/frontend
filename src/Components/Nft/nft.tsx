import {nearWallet} from "../../libs/wallet";
import {Contract} from "near-api-js";
import React, {useEffect, useState} from "react";
import {
    Collection, Image,
    NFT,
    SelectSkin,
    NFTName,
    Stake, NftTraits, Frame, Trait
} from "./styles";
//@ts-ignore
import Parse from 'parse/dist/parse.min.js';
import {fetchVerifiedUserByNearAccountId} from "../VerifyAccount";

Parse.initialize(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_HOST_URL;

interface Props {
    contract: Contract,
}

const getSkinImage = (nft: any) => {
    return nft.metadata.media.replace("preview-skin", "skin");
}

const getStakedNft = async (tokenId: string) => {
    const query = new Parse.Query("StakeNft");
    // use the equalTo filter to look for user which the name is John. this filter can be 
    // used in any data type
    query.equalTo('tokenId', tokenId);
    let results = await query.findAll();
    return results.length > 0 ? results[0]: null;
}

const getAllStakedNfts = async (nearAccountId: string) => {
    const query = new Parse.Query("StakeNft");
    // use the equalTo filter to look for user which the name is John. this filter can be 
    // used in any data type
    query.equalTo('nearAccountId', nearAccountId);
    query.equalTo('staked', true);
    return await query.findAll();
}

const DisplayNft = ({contract}: Props) => {
    const [nfts, setNfts] = React.useState<any[]>([]);
    const [overlay, setOverlay] = useState(false)
    const [displayInfo, setDisplayInfo] = useState(new Map());
    const [stakeds, setStakeds] = useState<any[]>([]);
    const [unstakeds, setUnstakeds] = useState<any[]>([]);

    useEffect(() => {
        setStakeds(nfts.filter((nft) => nft.isStaked === true));
        setUnstakeds(nfts.filter((nft) => !nft.isStaked));
    }, [nfts]);

    const wallet = nearWallet;
    const reloadNfts = async () => {
        //@ts-ignore
        const response = await contract.nft_tokens_for_owner(
            {
                "account_id": wallet.getAccountId()
            }
        );

        let stakedNfts = await getAllStakedNfts(nearWallet.getAccountId());
        let stakedTokenIds = new Set();
        // @ts-ignore
        stakedNfts.forEach((nft) => {stakedTokenIds.add(nft.get("tokenId"));});
        // @ts-ignore
        const newNfts = response.map(nft => {
            nft['isStaked'] = stakedTokenIds.has(nft['token_id']); 
            nft['earnedBlocks'] = 0;
            nft['hover'] = false;
            displayInfo.set(nft['token_id'], false);
            return nft;
        })

        setNfts(newNfts)
    }

    if (nfts.length <= 0) {
        reloadNfts();
    }

    const unstake = async (token_id: string) => {
        console.log("unstake");
        let stakedNft = await getStakedNft(token_id); 
        if (!stakedNft || stakedNft.length === 0) {
            // No nft to unstake.
            return;
        }
        stakedNft.set("nearAccountId", nearWallet.getAccountId());
        stakedNft.set("tokenId", token_id);
        stakedNft.set("staked", false);
      
        await stakedNft.save();
        reloadNfts();

        let allStakedNfts = await getAllStakedNfts(nearWallet.getAccountId());
        //@ts-ignore
        if (allStakedNfts.length === 0) {
            let verifiedUser = await fetchVerifiedUserByNearAccountId(nearWallet.getAccountId());
            if (verifiedUser) {
                verifiedUser.set("isVerified", false);
                await verifiedUser.save();
            }
        }
    }
    
    const stake = async (token_id: string) => {
        console.log("stake");
        let stakedNft = await getStakedNft(token_id); 
        if (!stakedNft || stakedNft.length === 0) {
            stakedNft = new Parse.Object("StakeNft");
        }
        stakedNft.set("nearAccountId", nearWallet.getAccountId());
        stakedNft.set("tokenId", token_id);
        stakedNft.set("staked", true);
      
        await stakedNft.save();
        reloadNfts();
    }

    const hover = (token_id: string) => {
        displayInfo.set(token_id, true)
        console.log("hover", displayInfo.get(token_id))

        setDisplayInfo(displayInfo)
        setOverlay(true)
    }
    const hoverleave = (token_id:string) => {
        console.log("leave", token_id)
        setOverlay(false)
        displayInfo.set(token_id,false)
        setDisplayInfo(displayInfo)
    }

    return (
        <>
            <h1> Unstaked BlockHeads </h1>      
            <Collection>
                {(unstakeds.length > 0) ?
                    unstakeds.map((nft) => {
                        console.log(nft)
                        return (<NFT>
                            <Frame
                                onMouseEnter={() => hover(nft.token_id)} onMouseLeave={() => hoverleave(nft.token_id)}
                            >
                                <Image src={nft.metadata.media} alt={"nft"}
                                />
                                {(overlay)?
                                    <NftTraits>
                                    <Trait>Skin Type: Robot</Trait>
                                    <Trait> $BUILD Earned: 100</Trait>
                                    <Trait>Date Staked: 10/21/21</Trait>
                                    <Trait>Staked Duration 1d 1H 20M</Trait>
                                    </NftTraits>
                                    : <></>}
                            </Frame>

                            <NFTName>{nft.metadata.title}</NFTName>
                            <SelectSkin href={"https://www.minecraft.net/profile/skin/remote?url=" + getSkinImage(nft)}
                                        target="_blank" rel="noopener noreferrer"> Change skin </SelectSkin>
                            {(nft.isStaked) ?
                                <>
                                    <Stake onClick={() => unstake(nft.token_id.toString())}>UnStake</Stake>
                                </>
                                : <Stake onClick={() => stake(nft.token_id.toString())}>Stake</Stake>}
                        </NFT>)
                    }) : <p>You do not own any unstaked BlockHeads</p>
                }
            </Collection>
            <h1> Staked BlockHeads </h1>     
            <Collection>
                {(stakeds.length > 0) ?
                    stakeds.map((nft) => {
                        console.log(nft)
                        return (<NFT>
                            <Frame
                                onMouseEnter={() => hover(nft.token_id)} onMouseLeave={() => hoverleave(nft.token_id)}
                            >
                                <Image src={nft.metadata.media} alt={"nft"}
                                />
                                {(overlay)?
                                    <NftTraits>
                                    <Trait>Skin Type: Robot</Trait>
                                    <Trait> $BUILD Earned: 100</Trait>
                                    <Trait>Date Staked: 10/21/21</Trait>
                                    <Trait>Staked Duration 1d 1H 20M</Trait>
                                    </NftTraits>
                                    : <></>}
                            </Frame>

                            <NFTName>{nft.metadata.title}</NFTName>
                            <SelectSkin href={"https://www.minecraft.net/profile/skin/remote?url=" + getSkinImage(nft)}
                                        target="_blank" rel="noopener noreferrer"> Change skin </SelectSkin>
                            {(nft.isStaked) ?
                                <>
                                    <Stake onClick={() => unstake(nft.token_id.toString())}>UnStake</Stake>
                                </>
                                : <Stake onClick={() => stake(nft.token_id.toString())}>Stake</Stake>}
                        </NFT>)
                    }) : <p>You do not own any staked BlockHeads</p>
                }
            </Collection>

        </>
    );
};

export {
    DisplayNft,
    getAllStakedNfts
}
