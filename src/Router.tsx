import React from 'react';
import './App.css';

import {Suspense} from "react";
import {Styles} from './styles/styles';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Route, Routes} from 'react-router-dom';
import {Contract} from "near-api-js";
import Dashboard from './Components/Dashboard';

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
                <Route path="/" element={<Dashboard contract={contract}/>}/>
                <Route path="/game" element={<h1>Game</h1>}/>
                <Route path="/whitepaper" element={<h1>whitepaper</h1>}/>
                <Route path="/aboutus" element={<h1>aboutus</h1>}/>
            </Routes>

            <Footer/>
        </Suspense>
    );
}

export default Router;
