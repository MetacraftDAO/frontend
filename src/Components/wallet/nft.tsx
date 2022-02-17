import { nearWallet} from "./wallet";
import {Contract} from "near-api-js";
import React from "react";
import {Image} from "./styles";
import { Button } from "../../styles/styles";

interface Props {
    contract: Contract,
}

const getSkinImage = (nft: any) => {
    return nft.metadata.media.replace("preview-skin", "skin");
}

const DisplayNft= ({contract}: Props) => {
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
            {(nfts.length > 0) ?
                nfts.map((nft) => {
                    // @ts-ignore
                   return (<><Image src={nft.metadata.media} alt={"nft"}/>
                   <a href={"https://www.minecraft.net/profile/skin/remote?url=" + getSkinImage(nft)} target="_blank" rel="noopener noreferrer"> Change skin </a></>)
                }) :
                <Button onClick={mint}> Load Nfts </Button>
            }
        </>
    );
};

export default DisplayNft;
