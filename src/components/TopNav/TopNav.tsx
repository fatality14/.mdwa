import React, { FocusEvent, useEffect, useRef, useState } from 'react';
import Icon from '../Common/Image/Icon';
import Navigation from './Navigation/Navigation';
import SiteName from './SiteName/SiteName';
import "./TopNav.scss";

export default function TopNav() {
    return (
        <nav className='top'>
            <SiteName href='#' styleName='sitename' text='.mdwa'></SiteName>
            <Navigation styleName='navigation'></Navigation>
            <div tabIndex={0} className='searchbar'>
                search
            </div>
            <div className='menu'>
                menu
            </div>
        </nav>
    )
}