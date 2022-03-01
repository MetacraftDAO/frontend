import React from 'react';
import './App.css';

import {Suspense} from "react";
import {Styles} from './styles/styles';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Route, Routes} from 'react-router-dom';
import {Contract} from "near-api-js";
import Dashboard from './Components/Dashboard';
import Home from './Components/Home'
import {VerifyAccount} from './Components/VerifyAccount';
import Whitepaper from './Components/Whitepaper';
import HowToPlay from './Components/HowToPlay';

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
                <Route path="/" element={<Home contract={contract}/>}/>
                <Route path="/nft" element={<Dashboard contract={contract} response={response}/>}/>
                <Route path="/verify" element={<VerifyAccount/>}/>
                <Route path="/map"/>
                <Route path="/whitepaper" element={<Whitepaper/>}/>
                <Route path="/how-to-play" element={<HowToPlay/>}/>
            </Routes>
            <Footer/>
        </Suspense>
    );
}

export default Router;
