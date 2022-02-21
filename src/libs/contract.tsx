import {nearWallet} from "./wallet";
import {Contract} from "near-api-js";
const BN = require('bn.js');

const CONTRACT_NAME = process.env.REACT_APP_CONTRACT_NAME || "dev-1644775935237-43621084292867"; // "katesonia2.testnet";
const TOKEN_CONTRACT_NAME = process.env.REACT_APP_CONTRACT_NAME || "dev-1645399396268-78246104129367"; // "katesonia2.testnet";


// Initializing our contract APIs by contract name and configuration
const nftContract = await new Contract(
  nearWallet.account(),
  // name of contract you're connecting to
  CONTRACT_NAME,
  {
    // name of contract you're connecting to
    viewMethods: [ "nft_metadata", "nft_tokens_for_owner"], // view methods do not change state but usually return a value
    changeMethods: ["addMessage", "nft_mint"], // change methods modify state'
  }
)

const tokenContract = await new Contract(
  nearWallet.account(),
  TOKEN_CONTRACT_NAME,
  {
      viewMethods: ["ft_balance_of", "storage_balance_of"], // view methods do not change state but usually return a value
      changeMethods: ["mint", "storage_deposit"], // change methods modify state
  }
)

const isTokenApproved = async () => {
  //@ts-ignore
  const storageBalance = await tokenContract.storage_balance_of(
    {
        "account_id": nearWallet.getAccountId()
    });
  return storageBalance? true : false;
}

const approveToken = async () => {
    //@ts-ignore
    await tokenContract.storage_deposit(
      {
          "account_id": nearWallet.getAccountId()
      },
      new BN('26B4BD9110D0', 16),
      new BN('26B4BD9110DCE800000', 16));

}

export {
  isTokenApproved,
  approveToken,
  nftContract,
  tokenContract
}


