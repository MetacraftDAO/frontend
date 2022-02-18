import getConfig from "../config/config";
import * as nearAPI from "near-api-js"

const CONTRACT_NAME = process.env.CONTRACT_NAME || "dev-1644775935237-43621084292867"; // "katesonia2.testnet";

const nearConfig = getConfig(process.env.REACT_APP_NEAR_CONFIG_ENV || "development")
const nearConnection = await nearAPI.connect(Object.assign({deps: {keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore()}},
    nearConfig));

const nearWallet = new nearAPI.WalletAccount(nearConnection, null);

const signIn = async () => {
    await nearWallet.requestSignIn(nearConfig.contractName, "test app");
    return nearWallet.getAccountId();
};

const signOut = () => {
    nearWallet.signOut();
};


const getLastTransactionStatus = async ()=> {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let txHash = urlParams.get('transactionHashes');
    if (txHash) {
        let txHashDecoded = nearAPI.utils.serialize.base_decode(txHash == null ? "" : txHash);
        let response = await nearConnection.connection.provider.txStatus(txHashDecoded, nearWallet.getAccountId());
        if(response.status.hasOwnProperty("SuccessValue")) return {"status": true, "msg": "Transaction succeeded"};
    }

    let errorMsg = urlParams.get('errorMessage');
    if (errorMsg) return {"status": false, "msg": decodeURI(errorMsg)};
    return {"status": null, "msg":""};
}

export {
    CONTRACT_NAME,
    signIn,
    signOut,
    nearWallet,
    getLastTransactionStatus
}
