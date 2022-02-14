import { nearWallet} from "../wallet/wallet";
import {randomSkin} from "../../config/skins"
import {Contract} from "near-api-js";
import { Button } from "../../styles/styles";
const BN = require('bn.js');

interface Props {
    contract: Contract,
}
const Mint = ({contract}: Props) => {

    const wallet = nearWallet;

    const mint = async () => {
        var id = Math.floor(Math.random() * 1000000000);

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
            <Button onClick={mint}> Mint </Button>
        </>
    );
};

export default Mint;
