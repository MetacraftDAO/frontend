import { useState } from "react";
import {nearWallet} from "../../libs/wallet";
import { Button } from "../../styles/styles";
//@ts-ignore
import Parse from 'parse/dist/parse.min.js';

Parse.initialize(process.env.REACT_APP_APPLICATION_ID, process.env.REACT_APP_JAVASCRIPT_KEY);
Parse.serverURL = process.env.REACT_APP_HOST_URL;

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

const getBuildGenerated = async () => {
    let playTime = await getAccumulatedPlayTime(nearWallet.getAccountId());
    if (!playTime) return 0;

    return playTime.get('accumulatedPlayTime') / 60;
}

const BuildToken = () => {
  const [numBuild, setNumBuild] = useState(0);
  const [displayBuild, setDisplayBuild] = useState(false);

  const setAccumulatedBuild = () => {
    getBuildGenerated().then((build) => {
        setNumBuild(build);
        setDisplayBuild(true);
    });
  }

  return (
    <>
        {displayBuild && (
          <>
            <h1> {numBuild} $BUILD to claim </h1> 
            <Button onClick={setAccumulatedBuild}>Refresh</Button>
            <br></br>
            <br></br>
            <Button>Claim</Button>
          </>)}
        {!displayBuild && <Button onClick={setAccumulatedBuild}> Load $BUILD </Button>}
    </>
  )
}

export default BuildToken;