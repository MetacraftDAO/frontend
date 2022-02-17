import getConfig from "../../config/config";
import * as nearAPI from "near-api-js"

const CONTRACT_NAME = process.env.CONTRACT_NAME || "dev-1644775935237-43621084292867"; // "katesonia2.testnet";

const nearConfig = getConfig(process.env.REACT_APP_NEAR_CONFIG_ENV || "development")
const near = await nearAPI.connect(Object.assign({deps: {keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore()}},
    nearConfig));

const nearWallet = new nearAPI.WalletAccount(near, null);

const signIn = async () => {
    await nearWallet.requestSignIn(nearConfig.contractName, "test app");
    return nearWallet.getAccountId();
};

const signOut = () => {
    nearWallet.signOut();
};

export {
    CONTRACT_NAME,
    signIn,
    signOut,
    nearWallet
}