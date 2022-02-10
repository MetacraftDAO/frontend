import React, {useEffect} from "react";
import {Span} from "../Header/styles";
import {nearWallet, signIn} from "../wallet";


const Login = () => {
    const [accountId, setAccountId] = React.useState("");
    useEffect(() => {
        setAccountId(nearWallet.getAccountId());
    }, [setAccountId]);

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
    return <Span onClick={signInOnClick}> Connect with MetaMask</Span>;
};

export default Login;
