import {nearWallet} from "../../libs/wallet";
import {Contract} from "near-api-js";
import React from "react";
import {Collection, Image,
NFT,
    SelectSkin,
Stake} from "./styles";
import {Button} from "../../styles/styles";

interface Props {
    contract: Contract,
}

const getSkinImage = (nft: any) => {
    return nft.metadata.media.replace("preview-skin", "skin");
}

const DisplayNft = ({contract}: Props) => {
    const [nfts, setNfts] = React.useState([]);

    const wallet = nearWallet;


    const mint = async () => {
        //@ts-ignore
        const response = await contract.nft_tokens_for_owner(
            {
                "account_id": wallet.getAccountId()
            }
        );
        setNfts(response)
    }


    return (
        <>
            <Collection>

            {(nfts.length > 0) ?
                nfts.map((nft) => {
                    // @ts-ignore
                    return (<NFT><Image src={nft.metadata.media} alt={"nft"}/>
                        <SelectSkin href={"https://www.minecraft.net/profile/skin/remote?url=" + getSkinImage(nft)}
                           target="_blank" rel="noopener noreferrer"> Change skin </SelectSkin>
                        <Stake>Stake</Stake>
                    </NFT>)
                }) :
                <Button onClick={mint}> Load Nfts </Button>
            }
            </Collection>

        </>
    );
};

export default DisplayNft;
