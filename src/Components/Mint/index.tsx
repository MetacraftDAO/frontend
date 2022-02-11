import {nearWallet} from "../wallet";
import * as nearAPI from "near-api-js";
const BN = require('bn.js');

const Mint = () => {

    const wallet = nearWallet;
    const account = nearWallet.account();

    const mint = async () => {
        console.log("mint presseed" + wallet.getAccountId());
        const contract = await new nearAPI.Contract(
            account,
            "katesonia5.testnet",
            {
                // name of contract you're connecting to
                viewMethods: ["getMessages", "nft_metadata"], // view methods do not change state but usually return a value
                changeMethods: ["addMessage", "nft_mint"], // change methods modify state
            }
        )
        var id = Math.floor(Math.random() * 1000000000);
        console.log(contract)
        console.log(wallet.getAccountId())

        // @ts-ignore
        console.log(await contract.nft_metadata())
        // @ts-ignore
        const response = await contract.nft_mint(
            {
                "token_id": id.toString(),
                "receiver_id": wallet.getAccountId(),
                "token_metadata": {
                    "title": "BlocHead",
                    "description": "Nearcraft character",
                    "media": "https://cdn.myminifactory.com/assets/object-assets/5dcff80379a67/images/720X720-schuin.jpg",
                    "copies": 1
                }
            },
            new BN('26B4BD9110D0', 16),
            new BN('26B4BD9110DCE800000', 16)
        );
        console.log(response);
    }

    return (
        <>
            <h1 onClick={mint}>mint </h1>
        </>
    );
};

export default Mint;
