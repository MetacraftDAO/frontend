import { useState } from "react";
import { Span } from "../Header/styles";
import { nearWallet, signIn } from "../../libs/wallet";
import { isNullishCoalesce } from "typescript";
declare var window: any;

const Login = () => {
  const [defaultAccount, setDefaultAccount] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
  };

  const signOutOnClick = () => {
    setDefaultAccount(null);
  };
  
  if (defaultAccount) {
    return (
      <Span onClick={signOutOnClick}>{defaultAccount} (logout)</Span>
    );
  }
  return <Span onClick={connectWalletHandler}> Connect with MetaMask</Span>;
};

export default Login;
