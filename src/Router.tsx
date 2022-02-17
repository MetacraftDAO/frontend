import React from 'react';
import './App.css';

import {Suspense} from "react";
import {Styles} from './styles/styles';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Route, Routes} from 'react-router-dom';
import {Contract, providers} from "near-api-js";
import Dashboard from './Components/Dashboard';
import VerifyAccount from './Components/VerifyAccount';

interface Props {
    contract: Contract,
    response: any
}

const Router = ({contract, response}: Props) => {
    return (
        <Suspense fallback={null}>
            <Styles/>
            <Header/>

            <Routes>
                <Route path="/" element={<Dashboard contract={contract} response={response}/>}/>
                <Route path="/game" element={<h1>Game</h1>}/>
                <Route path="/whitepaper" element={<h1>whitepaper</h1>}/>
                <Route path="/aboutus" element={<h1>aboutus</h1>}/>
                <Route path="/verify" element={<VerifyAccount/>}/>
            </Routes>

            <Footer/>
        </Suspense>
    );
}

export default Router;
