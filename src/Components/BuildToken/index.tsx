import { useState } from "react";
import {nearWallet, getLastTransactionStatus} from "../../libs/wallet";
import { Button } from "../../styles/styles";
//@ts-ignore
import Parse from 'parse/dist/parse.min.js';
import {tokenContract, registerUserIfNeeded} from "../../libs/contract";

Parse.initialize(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_HOST_URL;

// const response = await getLastTransactionStatus();
const getAccumulatedPlayTime = async (nearAccountId: string) => {
    const query = new Parse.Query('PlayTime');
    // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
    query.equalTo('nearAccountId', nearAccountId);
    // run the query
    const results = await query.findAll();
    // @ts-ignore
    console.log('results ', results);
    return results.length > 0 ? results[0] : null;
}

const resetPlayTime = async (nearAccountId: string) => {
  const query = new Parse.Query('PlayTime');
  // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
  query.equalTo('nearAccountId', nearAccountId);
  let playTime = await query.first();
  playTime.set("accumulatedPlayTime", 0);
  playTime.set("tikTime", "");
  playTime.set("tokTime", "");

  await playTime.save();
}

const getBuildGenerated = async () => {
    let playTime = await getAccumulatedPlayTime(nearWallet.getAccountId());
    if (!playTime) return 0;

    return playTime.get('accumulatedPlayTime') / 60;
}

// await registerStorage(nearWallet.getAccountId());

const mint = async (amount: number) => {
  await resetPlayTime(nearWallet.getAccountId());
  //@ts-ignore
  await tokenContract.mint(
    {
        "amount": Math.floor(amount * 1e5).toString()
    });
}

const getTokenBalance = async () => {
  //@ts-ignore
  const response = await tokenContract.ft_balance_of(
      {
          "account_id": nearWallet.getAccountId()
      }
  );

  return response;
} 

const BuildToken = () => {
  const [numBuild, setNumBuild] = useState(0);
  getBuildGenerated().then((build) => {
    setNumBuild(build);
  });

  const [responseMsg, setResponseMsg] = useState("");  
  getLastTransactionStatus().then((response) => {
    let msg = ""
    if (response && response.status != null && response.method == 'mint') {
      msg = "Successfully claimed $BUILD!";
    }
    setResponseMsg(msg);
  });  

  const [balance, setBalance] = useState(0);

  if (nearWallet.getAccountId() && numBuild > 0) {
    registerUserIfNeeded().then(() => {
      console.log("create storage deposit to interate with BUILD contract");
    });
  }

  const setAccumulatedBuild = () => {
    getBuildGenerated().then((build) => {
        setNumBuild(build);
    });
  }

  const claimToken = () => {
    mint(numBuild).then(()=> {
      console.log("Claimed blocks!");
      setNumBuild(0);
    });    
  }


  getTokenBalance().then((amount) => {
    setBalance(parseInt(amount) / 1e5);
  })

  return (
    <>
            <h1>{numBuild} $BUILD to claim </h1>
            <h1>{responseMsg ? "Successfully claimed $BUILDs!" : ""}</h1>
            <Button onClick={setAccumulatedBuild}>Refresh</Button>
            <br/>
            <br/>
            {numBuild > 0 && <Button onClick={claimToken}>Claim</Button>}
            <br></br>
            <br></br>
            <h1> Your current build balance: {balance} $BUILD</h1>
    </>
  )
}

export default BuildToken;