
import { nearWallet } from "../wallet/wallet";
import { useState } from "react";



const VerifyAccount = () => {
  const [isVerified, setIsVerified] = useState(nearWallet.isSignedIn());

  const verify = () => {
    setIsVerified(nearWallet.isSignedIn());
  }

  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let encoded = urlParams.get('params');
  let atob = require('atob');
  let decoded = atob(encoded);
  urlParams = new URLSearchParams(decoded);

  return (
    <>
    <h1>Minecraft user {urlParams.get("username")}</h1>
    <h1>{isVerified ? "Account is successfully verified!" : "Please login with your wallet and verify"}</h1>
    <button onClick={verify}> Verify account </button>
    </>
  )
}

export default VerifyAccount
