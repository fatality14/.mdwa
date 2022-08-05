import React, { CSSProperties, FocusEvent, useEffect, useRef, useState } from 'react';
import Icon from '../Common/Image/Icon';
import Menu from './Menu/Menu';
import Navigation from './Navigation/Navigation';
import Search from './Search/Search';
import SiteName from './SiteName/SiteName';
import "./TopNav.scss";

export default function TopNav() {
    const [navClassName, setNavClassName] = useState('navigation');
    const [searchClassName, setSearchClassName] = useState('searchbar');

    return (
        <nav id='top-nav' className='top'>
            <SiteName href='#' className='sitename' text='.mdwa'></SiteName>
            <Navigation className={navClassName}></Navigation>
            <Search
                onFocus={() => {
                    setSearchClassName('searchbar-expanded')
                    setNavClassName('navigation-hidden')
                }}
                onBlur={() => {
                    setSearchClassName('searchbar')
                    setNavClassName('navigation')
                }}
                className={searchClassName}
            ></Search>
            <Menu></Menu>
        </nav>
    )
}