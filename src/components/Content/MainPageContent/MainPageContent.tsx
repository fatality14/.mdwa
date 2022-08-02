import * as React from 'react';
import { useState, useEffect } from 'react';
import LeftNav from '../Common/LeftNav/LeftNav';
import "./MainPageContent.scss"

function MainPageContent() {
    return (
        <main>
            <LeftNav className='left'></LeftNav>
            <div className='content'>
                div main
            </div>
        </main>
    );
}

export default MainPageContent;
