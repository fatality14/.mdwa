import React, { FocusEvent, useEffect, useRef, useState } from 'react';
import "./App.scss";
import MainPageContent from '../Content/MainPageContent/MainPageContent';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer/Footer';

function App() {
    
    useEffect(()=>{
        let scw = window.innerWidth - document.body.clientWidth;
        document.documentElement.style.setProperty('--scw', `${scw}px`);
    },[])

    return (
        <div>
            <TopNav></TopNav>
            <MainPageContent></MainPageContent>
            <Footer></Footer>
        </div>
    );
}

export default App;
