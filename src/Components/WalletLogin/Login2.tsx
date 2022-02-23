import { useState } from "react";
import { Span } from "../Header/styles";
import { nearWallet, signIn } from "../../libs/wallet";

const Login2 = () => {
  const [accountId, setAccountId] = useState(nearWallet.getAccountId());

  const signInOnClick = () => {
    signIn().then(
      (accountId) => {
        console.log("log in wallet.tsx: ", accountId);
        setAccountId(accountId);
      },
      (err) => {
        console.error(err);
      }
    );
  };

  const signOutOnClick = () => {
    nearWallet.signOut();
    setAccountId("");
  };

  if (accountId) {
    return (
      <Span onClick={signOutOnClick}>{nearWallet.getAccountId()} (logout)</Span>
    );
  }
  return <Span onClick={signInOnClick}> Connect with NearWallet</Span>;
};

export default Login2;
