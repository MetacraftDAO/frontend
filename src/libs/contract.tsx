import {CONTRACT_NAME, nearWallet} from "./wallet";
import {Contract} from "near-api-js";


// Initializing our contract APIs by contract name and configuration
const nftContract = await new Contract(
    nearWallet.account(),
    CONTRACT_NAME,
    {
        // name of contract you're connecting to
        viewMethods: ["getMessages", "nft_metadata", "nft_tokens_for_owner"], // view methods do not change state but usually return a value
        changeMethods: ["addMessage", "nft_mint"], // change methods modify state
    }
)

export {
  nftContract
}


