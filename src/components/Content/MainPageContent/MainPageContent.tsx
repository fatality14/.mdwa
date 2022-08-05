import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import LeftNav from '../Common/LeftNav/LeftNav';
import MdLoader from '../Common/MdLoader/MdLoader';
import "./MainPageContent.scss"

function MainPageContent() {
    return (
        <main id="main">
            <LeftNav className='left'></LeftNav>
            <div className='content'>
                <MdLoader></MdLoader>
            </div>
        </main>
    );
}

export default MainPageContent;
