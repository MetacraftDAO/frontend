import {nearWallet} from "../../libs/wallet";
import {Contract} from "near-api-js";
import React, {useState} from "react";
import {
    Collection, Image,
    NFT,
    SelectSkin,
    NFTName,
    Stake, NftTraits, Frame, Trait
} from "./styles";
//@ts-ignore
import Parse from 'parse/dist/parse.min.js';

Parse.initialize(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_HOST_URL;

interface Props {
    contract: Contract,
}

const getSkinImage = (nft: any) => {
    return nft.metadata.media.replace("preview-skin", "skin");
}

const DisplayNft = ({contract}: Props) => {
    const [nfts, setNfts] = React.useState<any[]>([]);

    const [overlay, setOverlay] = useState(false)
    const [displayInfo, setDisplayInfo] = useState(new Map())

    const wallet = nearWallet;
    const mint = async () => {
        //@ts-ignore
        const response = await contract.nft_tokens_for_owner(
            {
                "account_id": wallet.getAccountId()
            }
        );


        // @ts-ignore
        const newNfts = response.map(nft => {
            nft['isStaked'] = false; //TODO: call db
            nft['earnedBlocks'] = 0;
            nft['hover'] = false;
            displayInfo.set(nft['token_id'], false);
            return nft
        })

        setNfts(newNfts)

        setNfts(newNfts)
    }

    if (nfts.length <= 0) {
        mint()
    }
    const signOutOnClick = () => {
        nearWallet.signOut();
        // setAccountId("");
    };

    const verifyStakedNft = async (token_id: string) => {
        const query = new Parse.Query('VerifyStakedNft');
        // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
        query.equalTo('nearAccountId', nearWallet.getAccountId());
        query.equalTo('token_id', token_id);
        query.equalTo('isStaked', true);
        const results = await query.findAll();
        return results.length > 0 ? results[0] : null;
    }
    const unstake = async (token_id: string) => {
        console.log("stake")
        // User should own the nft
        const stakedNft = await verifyStakedNft(token_id)
        if (stakedNft) {
            // TODO: update stacked entry, mark as unstaked and record time
        } else {
            console.log("This nft is not staked", token_id)
        }

    }

    const stake = async (token_id: string) => {
        const Stake = new Parse.Object("StakedAssets");
        Stake.set("token_id", token_id)
        Stake.set("nearAccountId", nearWallet.getAccountId())
        Stake.set("isStaked", true)
        Stake.set("stakedAt", Date.now())
        await Stake.save();
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
            <Collection>

                {(nfts.length > 0) ?
                    nfts.map((nft) => {
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
                                    <Stake onClick={() => unstake(nft.token_id)}>UnStake</Stake>
                                </>
                                : <Stake onClick={() => stake(nft.token_id)}>Stake</Stake>}
                        </NFT>)
                    }) : <p>You do not own any BlockHeads</p>
                }
            </Collection>

        </>
    );
};

export default DisplayNft;
