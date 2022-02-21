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

interface Props {
    contract: Contract,
}

const getSkinImage = (nft: any) => {
    return nft.metadata.media.replace("preview-skin", "skin");
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

        setNfts(newNfts)
    }

    if (nfts.length <= 0) {
        mint()
    }
    const signOutOnClick = () => {
        nearWallet.signOut();
        // setAccountId("");
    };

    const unstake = (token_id: string) => {
        console.log("stake")
    }

    const stake = (token_id: string) => {
        console.log("un stake")
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
                                    <Stake onClick={() => stake(nft.token_id)}>UnStake</Stake>
                                </>
                                : <Stake onClick={() => unstake(nft.token_id)}>Stake</Stake>}
                        </NFT>)
                    }) : <p>You do not own any BlockHeads</p>
                }
            </Collection>

        </>
    );
};

export default DisplayNft;
