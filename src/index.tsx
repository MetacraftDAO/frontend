import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import * as nearAPI from 'near-api-js';
import {CONTRACT_NAME, nearWallet, getLastTransactionStatus} from "./libs/wallet";
//@ts-ignore
import Parse from 'parse/dist/parse.min.js';


const response = await getLastTransactionStatus();
// Initializing contract
async function init() {

    // Load in account data
    let currentUser;
    if (nearWallet.getAccountId()) {
        currentUser = {
            accountId: nearWallet.getAccountId(),
            balance: (await nearWallet.account().state()).amount
        };
    }

    // Initializing our contract APIs by contract name and configuration
    const contract = await new nearAPI.Contract(
        nearWallet.account(),
        CONTRACT_NAME,
        {
            // name of contract you're connecting to
            viewMethods: ["getMessages", "nft_metadata", "nft_tokens_for_owner"], // view methods do not change state but usually return a value
            changeMethods: ["addMessage", "nft_mint"], // change methods modify state
        }
    )

    // contract.
    return {contract, currentUser};
}

init()
    .then(({contract, currentUser}) => {
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <Router contract={contract}
                            // currentUser={currentUser}
                            response={response}
                    />
                </BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')
        );
    });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
