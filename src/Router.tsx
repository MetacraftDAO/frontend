import React from 'react';
import './App.css';

import {lazy, Suspense} from "react";
import { Styles } from './styles/styles';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Route, Routes} from 'react-router-dom';
import Home from "./Components/Home";

function Router() {
  return (
      <Suspense fallback={null}>
        <Styles/>
        <Header/>

          {/*Routes go here*/}
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/game" element={<h1>Game</h1>} />
              <Route path="/whitepaper" element={<h1>whitepaper</h1>} />
              <Route path="/aboutus" element={<h1>aboutus</h1>} />
          </Routes>

        <Footer/>
      </Suspense>
  );
}

export default Router;
