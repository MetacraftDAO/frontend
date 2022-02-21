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

    const unstake = (token_id: string) => {
        console.log("stake")
    }

    const stake = (token_id: string) => {
        console.log("un stake")
    }

    const hover = (token_id: string) => {

        displayInfo.set(token_id, true)
        console.log("hover", displayInfo.get(token_id))

        setDisplayInfo(displayInfo)
        // setOverlay(true)
    }
    const hoverleave = (token_id:string) => {
        console.log("leave", token_id)
        // setOverlay(false)
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

                                {(displayInfo.get(nft.token_id))?
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
