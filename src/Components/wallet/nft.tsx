import { nearWallet} from "./wallet";
import {Contract} from "near-api-js";
import React from "react";
import {Image} from "./styles";
import { Button } from "../../styles/styles";

interface Props {
    contract: Contract,
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
                   return <Image src={nft.metadata.media} alt={"nft"}/>
                }) :
                <Button onClick={mint}> Load Nfts </Button>
            }
        </>
    );
};

export default DisplayNft;
