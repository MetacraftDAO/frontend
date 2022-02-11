import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import getConfig from './config/config';
import * as nearAPI from 'near-api-js';


// Initializing contract
async function initContract() {
    const nearConfig = getConfig(process.env.NODE_ENV || 'testnet');

    // Initializing connection to the NEAR TestNet
    const near = await nearAPI.connect({
        keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
        ...nearConfig
    });

    // Needed to access wallet
    const walletConnection = new nearAPI.WalletConnection(near, "");

    // Load in account data
    let currentUser;
    if(walletConnection.getAccountId()) {
        currentUser = {
            accountId: walletConnection.getAccountId(),
            balance: (await walletConnection.account().state()).amount
        };
    }

    // Initializing our contract APIs by contract name and configuration
    const contract = await new nearAPI.Contract(walletConnection.account(), nearConfig.contractName, {
        // View methods are read-only – they don't modify the state, but usually return some value
        viewMethods: ['get_status'],
        // Change methods can modify the state, but you don't receive the returned value when called
        changeMethods: ['set_status'],
        // Sender is the account ID to initialize transactions.
        // getAccountId() will return empty string if user is still unauthorized
        // sender: walletConnection.getAccountId()
    });

    console.log(contract)

    // contract.
    return { contract, currentUser, nearConfig, walletConnection };
}

initContract()
    .then(({ contract, currentUser, nearConfig, walletConnection }) => {
        ReactDOM.render(
            <React.StrictMode>
                <BrowserRouter>
                    <Router   contract={contract}
                              currentUser={currentUser}
                              nearConfig={nearConfig}
                              wallet={walletConnection} />
                </BrowserRouter>
            </React.StrictMode>,
            document.getElementById('root')
        );
    });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
