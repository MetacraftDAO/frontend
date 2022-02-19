
import { nearWallet, signIn } from "../../libs/wallet";
import { useState } from "react";
import { nftContract } from '../../libs/contract';
//@ts-ignore
import Parse from 'parse/dist/parse.min.js';


Parse.initialize(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_HOST_URL;

const connectedWalletAndHasNft = async () => {
  if(!nearWallet.isSignedIn()) {
    await signIn();
  }
  //@ts-ignore
  const nfts = await nftContract.nft_tokens_for_owner(
    {
        "account_id": nearWallet.getAccountId()
    }
  );
  return nfts.length > 0;
}

const writeNewVerifiedUserToDB = async (uuid: string, username: string, nearAccountId: string, isVerified: boolean) => {
  const User = new Parse.Object("VerifiedUser");
  User.set("uuid", uuid);
  User.set("username", username);
  User.set("nearAccountId", nearAccountId);
  User.set("isVerified", isVerified);
  await User.save();
}

const updateExistingVerifiedUserToDB = async (User: any, uuid: string, username: string, nearAccountId: string, isVerified: boolean) => {
  User.set("uuid", uuid);
  User.set("username", username);
  User.set("nearAccountId", nearAccountId);
  User.set("isVerified", isVerified);
  await User.save();
}

const verify = async (uuid: string | null, username: string | null) => {
  // If wallet not connected or have no nft, return false.
  let connected = await connectedWalletAndHasNft();
  if (!connected) return [username, false, "Connect your wallet and mint a nft to start playing"];
  let nearAccountId = nearWallet.getAccountId();

  let verifiedUser = await fetchVerifiedUserByNearAccountId(nearAccountId);
  // If no existing DB object for near account id.
  if (!verifiedUser) {
    if(!uuid || !username) {
      return [null, false, "No minecraft account to verify, enter mincraft and type /verify"];
    }

    let existingUser = await fetchVerifiedUserByUUID(uuid);
    if (!existingUser) {
      await writeNewVerifiedUserToDB(uuid, username, nearAccountId, true);
    } else {
      await updateExistingVerifiedUserToDB(existingUser, uuid, username, nearAccountId, true);
    }
    return [username, true, "Account is successfully verified!"];
  }

  // If there is a existing DB object for near account id, already verified and the near account is the same as current account
  // No need to update the DB.
  if (verifiedUser.get('isVerified') && (verifiedUser.get('username') == username || !username)) {
    return [verifiedUser.get('username'), true, "Account is successfully verified!"];
  }

  await updateExistingVerifiedUserToDB(
    verifiedUser, uuid ? uuid : verifiedUser.get('uuid'), 
    username ? username : verifiedUser.get('username'), 
    nearAccountId, true);
  return [username ? username : verifiedUser.get('username'), true, "Account is successfully verified!"];
}

const displayMsg = (isVerified: boolean)=> {
  return isVerified ? "Account is successfully verified!" : "Pls login with your wallet and verify";
}

const fetchVerifiedUserByNearAccountId = async (nearAccountId: string) => {
  const query = new Parse.Query('VerifiedUser');
  // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
  query.equalTo('nearAccountId', nearAccountId);
  // run the query
  const results = await query.findAll();
  // @ts-ignore
  console.log('results ', results);
  return results.length > 0 ? results[0] : null;
}

const fetchVerifiedUserByUUID = async (uuid: string) => {
  const query = new Parse.Query('VerifiedUser');
  // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
  query.equalTo('uuid', uuid);
  // run the query
  const results = await query.findAll();
  // @ts-ignore
  console.log('results ', results);
  return results.length > 0 ? results[0] : null;
}

const getUUIDandUsername = ()=>{
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let encoded = urlParams.get('params');
  let atob = require('atob');
  let decoded = atob(encoded);
  urlParams = new URLSearchParams(decoded);
  let uuid = urlParams.get("uuid");
  let username = urlParams.get("username");
  return {uuid, username};
}

const VerifyAccount = () => {
  const [isVerified, setIsVerified] = useState(false);
  let {uuid, username} = getUUIDandUsername();
  const [linkedUsername, setlinkedUsername] = useState(username);
  const [msg, setMsg] = useState("");
  
  const setVerifyStatus = () => {
    //@ts-ignore
    verify(uuid, username).then(([username, isVerified, msg]) => {
      setlinkedUsername(username);
      setIsVerified(isVerified);
      setMsg(msg);
    });
  }

  return (
    <>
    {!linkedUsername ? (<h1>No minecraft user to verify!<br></br>Enter minecraft and type /verify</h1>) : (<h1>{"Minecraft user " + linkedUsername}</h1>)}
    <h1>{msg}</h1>
    <button onClick={setVerifyStatus}> Verify account </button>
    </>
  )
}

export default VerifyAccount
