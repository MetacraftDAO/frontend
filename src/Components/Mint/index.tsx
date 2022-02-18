import { nearWallet} from "../../libs/wallet";
import {randomSkin} from "../../config/skins"
import {Contract} from "near-api-js";
import { Button } from "../../styles/styles";
const BN = require('bn.js');

interface Props {
    contract: Contract,
    response: any
}

const removeParamsFromUrl= ()=> {
    var url= document.location.href;
    window.history.pushState({}, "", url.split("?")[0]);
}

const Mint = ({contract, response}: Props) => {

    const wallet = nearWallet;

    const mint = async () => {
        var id = Math.floor(Math.random() * 1000000000);

        removeParamsFromUrl();

        //@ts-ignore
        await contract.nft_mint(
            {
                "token_id": id.toString(),
                "token_owner_id": wallet.getAccountId(),
                "token_metadata": {
                    "title": "BlocHead #" + id,
                    "description": "Nearcraft character",
                    "media": randomSkin(),
                    "copies": 1
                }
            },
            new BN('26B4BD9110D0', 16),
            new BN('26B4BD9110DCE800000', 16)
        );
    }

    return (
        <>
            {/* {response} */}
            <Button onClick={mint}> Mint </Button>
        </>
    );
};

export default Mint;
