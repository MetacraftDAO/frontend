import React, {useState, useEffect} from "react";
import getConfig from "../config/config";
import * as nearAPI from "near-api-js"
import {WalletConnection} from "near-api-js";

const nearConfig = getConfig(process.env.NODE_ENV || "development")
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

const shortenAddress = (address: string, chars = 4): string => {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};

export {
    signIn,
    signOut,
    shortenAddress,
    nearWallet
}
