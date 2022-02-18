
import { nearWallet } from "../wallet/wallet";
import { useState } from "react";
import { Contract} from "near-api-js";
import { nftContract } from '../Contract/contract';


const verify = async () => {
  if(!nearWallet.isSignedIn()) return false;
  //@ts-ignore
  const nfts = await nftContract.nft_tokens_for_owner(
    {
        "account_id": nearWallet.getAccountId()
    }
  );
  return nfts.length > 0;
}

const currentAccountVerified = await verify();
const displayMsg = (username: string, isVerified: boolean)=> {
  if (!username) return "No minecraft user to verify! Pls login your minecraft account and type /verfy command to verify";
  return isVerified ? "Account is successfully verified!" : "Pls login with your wallet and verify";
}

const VerifyAccount = () => {
  const [isVerified, setIsVerified] = useState(currentAccountVerified);

  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let encoded = urlParams.get('params');
  let atob = require('atob');
  let decoded = atob(encoded);
  urlParams = new URLSearchParams(decoded);
  let username = urlParams.get("username") ;

  const setVerifyStatus = async () => {
    if (username) {
      setIsVerified(await verify());
    }
  }

  return (
    <>
    <h1>Minecraft user {username}</h1>
    <h1>{displayMsg(username ? username : "", isVerified)}</h1>
    <button onClick={setVerifyStatus}> Verify account </button>
    </>
  )
}

export default VerifyAccount
