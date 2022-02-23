import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {nearWallet, getLastTransactionStatus} from "./libs/wallet";
import { nftContract } from './libs/contract';


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
    const contract = nftContract;

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
