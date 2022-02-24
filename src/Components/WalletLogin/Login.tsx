import { useState } from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import { Span } from "../Header/styles";
import {nearWallet, signIn} from "../../libs/wallet";
declare var window: any;

// Wallet login.
const Login = () => {
  const [defaultAccount, setDefaultAccount] = useState(null);

  const [accountId, setAccountId] = useState(nearWallet.getAccountId());

  const signInNear = () => {
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

  const signOutNear = () => {
    nearWallet.signOut();
    setAccountId("");
  };

  const signInMetaMask = () => {
    console.log("sign in metamask")
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

  const signOutMetaMask = () => {
    setDefaultAccount(null);
  };

  if (defaultAccount) {
    return (
      <Span onClick={signOutMetaMask}>{defaultAccount} (logout)</Span>
    );
  } else if(accountId) {
    return (
        <Span onClick={signOutNear}>{accountId} (logout)</Span>
    );
  }
  return (<>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Connect to Wallet
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={signInNear} >Connect to Near </Dropdown.Item>
          <Dropdown.Item onClick={signInMetaMask}>Connect To Metamask</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  </>)
};

export default Login;
