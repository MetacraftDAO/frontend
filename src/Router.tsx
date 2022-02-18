import React from 'react';
import './App.css';

import {Suspense} from "react";
import {Styles} from './styles/styles';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Route, Routes} from 'react-router-dom';
import {Contract} from "near-api-js";
import Dashboard from './Components/Dashboard';
import Home from "./Components/Home";

interface Props {
    contract: Contract,
    currentUser: any,
}

const Router = ({contract}: Props) => {
    return (
        <Suspense fallback={null}>
            <Styles/>
            <Header/>

            <Routes>
                <Route path="/" element={<Home contract={contract}/>}/>
                <Route path="/nft" element={<Dashboard contract={contract}/>}/>
            </Routes>

            <Footer/>
        </Suspense>
    );
}

export default Router;
