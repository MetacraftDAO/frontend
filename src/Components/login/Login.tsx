import React, {useState} from "react";
import {Span} from "../Header/styles";
import getConfig from "../../config/config";
import * as nearAPI from "near-api-js"

const nearConfig = getConfig(process.env.NODE_ENV || "development")
const near = await nearAPI.connect(Object.assign({deps: {keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore()}},
    nearConfig));


const wallet = new nearAPI.WalletAccount(near, null);
console.log(wallet.getAccountId())

const signIn = async () => {
    if (!wallet.getAccountId()) {
        await wallet.requestSignIn(nearConfig.contractName, "test app");
    }
    return wallet.getAccountId();
};

const Login = () => {
    const [accountId, setAccountId] = useState(wallet.getAccountId());

    const signInOnClick = () => {
        signIn().then(
            (accountId) => {
                console.log("log in wallet: ", accountId);
                setAccountId(accountId);
            },
            (err) => {
                console.error(err);
            }
        );
    };

    const signOutOnClick = () => {
        // wallet.signOut();
        setAccountId("");
    };

    const shortenAddress = (address: string, chars = 10): string => {
        return address.length > 2*chars ? `${address.slice(0, chars)}...${address.slice(-chars)}`: address;
    };

    if (accountId) {
        return (
            <Span onClick={signOutOnClick}>{shortenAddress(wallet.getAccountId())}</Span>
        );
    }
    return <Span onClick={signInOnClick}> Connect with MetaMask</Span>;
};

export default Login;
