
import { nearWallet } from "../../libs/wallet";
import { useState } from "react";
import { nftContract } from '../../libs/contract';
//@ts-ignore
import Parse from 'parse/dist/parse.min.js';


Parse.initialize(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_HOST_URL;

const verify = async (uuid: string, username: string) => {
  if(!nearWallet.isSignedIn()) return false;
  //@ts-ignore
  const nfts = await nftContract.nft_tokens_for_owner(
    {
        "account_id": nearWallet.getAccountId()
    }
  );
  if (nfts.length == 0) return false;
  let verified = await fetchVerifiedUser(uuid);
  if (verified && verified.get('isVerified') && verified.get('nearAccountId') == nearWallet.getAccountId()) return true;

  if (verified && verified.get('nearAccountId') != nearWallet.getAccountId()) {
    verified.set("nearAccountId", nearWallet.getAccountId());
    verified.set("isVerified", true);
    await verified.save();
    return true;
  }

  const User = new Parse.Object("VerifiedUser");
  User.set("uuid", uuid);
  User.set("username", username);
  User.set("nearAccountId", nearWallet.getAccountId());
  User.set("isVerified", true);
  await User.save();
  return true;
}

const displayMsg = (isVerified: boolean)=> {
  return isVerified ? "Account is successfully verified!" : "Pls login with your wallet and verify";
}



const fetchVerifiedUser = async (uuid: string) => {
  const query = new Parse.Query('VerifiedUser');
  // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
  query.equalTo('uuid', uuid);
  // run the query
  const results = await query.findAll();
  // @ts-ignore
  console.log('results ', results);
  return results.length > 0 ? results[0] : null;
}

const VerifyAccount = () => {
  const [isVerified, setIsVerified] = useState(false);

  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let encoded = urlParams.get('params');
  let atob = require('atob');
  let decoded = atob(encoded);
  urlParams = new URLSearchParams(decoded);
  let uuid = urlParams.get("uuid");
  let username = urlParams.get("username");


  const setVerifyStatus = async () => {
    if (uuid) {
      verify(uuid ? uuid : "", username ? username : "").then((verified: boolean) => {
        setIsVerified(verified);
      });
    }
  }

  return (
    <>
    {!username ? (<h1>No minecraft user to verify!<br></br>Enter minecraft and type /verify</h1>) : (<h1>{"Minecraft user " + username}</h1>)}
    {isVerified && <h1>{displayMsg(isVerified)}</h1>}
    <button onClick={setVerifyStatus}> Verify account </button>
    </>
  )
}

export default VerifyAccount
