import React, { useState, useEffect } from "react";
const { connect, WalletConnection, keyStores } = require("near-api-js");

const CONTRACT_NAME = "katesonia2.testnet";

const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

const near = await connect(config);
const wallet = new WalletConnection(near);

const signIn = async () => {
  await wallet.requestSignIn(CONTRACT_NAME, "test app");
  return wallet.getAccountId();
};

const Login = () => {
  const [accountId, setAccountId] = React.useState("");
  useEffect(() => {
    setAccountId(wallet.getAccountId());
  }, [setAccountId]);

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
    wallet.signOut();
    setAccountId("");
  };

  if (accountId) {
    return (
      <div>
        <div> '{accountId}' is logged in! </div>
        <button onClick={signOutOnClick}> logout </button>
      </div>
    );
  }
  return <button onClick={signInOnClick}> login </button>;
};

export default Login;
