import {nearWallet} from "../../libs/wallet";
import {Contract} from "near-api-js";
import React from "react";
import {
    Collection, Image,
    NFT,
    SelectSkin,
    NFTName,
    Stake
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

//@ts-ignore
const getNftStakeStatus= async (nft)=>{

}

const DisplayNft = ({contract}: Props) => {
    const [nfts, setNfts] = React.useState<any[]>([]);


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
            return nft
        })

        setNfts(newNfts)
    }

    if (nfts.length <= 0) {
        mint()
    }
    const signOutOnClick = () => {
        nearWallet.signOut();
        // setAccountId("");
    };

    const unstake = async (token_id: string) => {
        console.log("unstake");
        const query = new Parse.Query("StakeNft");
        // use the equalTo filter to look for user which the name is John. this filter can be 
        // used in any data type
        query.equalTo('nearAccountId', nearWallet.getAccountId());
        let results = await query.findAll();
        let playTime = new Parse.Object("StakeNft");
        if (results.length > 0) {
            playTime = results[0];
        }
        playTime.set("nearAccountId", 0);
        playTime.set("tokenId", token_id);
        playTime.set("staked", false);
      
        await playTime.save();
    }

    const stake = async (token_id: string) => {
        console.log("stake");
        const query = new Parse.Query("StakeNft");
        // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
        query.equalTo('nearAccountId', nearWallet.getAccountId());
        let results = await query.findAll();
        let playTime = new Parse.Object("StakeNft");
        if (results.length > 0) {
            playTime = results[0];
        }
        playTime.set("nearAccountId", 0);
        playTime.set("tokenId", token_id);
        playTime.set("staked", true);
      
        await playTime.save();
    }

    return (
        <>
            <Collection>
                {(nfts.length > 0) ?
                    nfts.map((nft) => {
                        console.log(nft)
                        return (<NFT>
                            <Image src={nft.metadata.media} alt={"nft"}/>
                            <NFTName>{nft.metadata.title}</NFTName>
                            <SelectSkin href={"https://www.minecraft.net/profile/skin/remote?url=" + getSkinImage(nft)}
                                        target="_blank" rel="noopener noreferrer"> Change skin </SelectSkin>
                            {(nft.isStaked) ?
                                <>
                                    <p>Earned Blocks: {nft.earnedBlocks}</p>
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
