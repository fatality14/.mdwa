import React, { CSSProperties, FocusEvent, useEffect, useRef, useState } from 'react';
import Icon from '../Common/Image/Icon';
import Menu from './Menu/Menu';
import Navigation from './Navigation/Navigation';
import Search from './Search/Search';
import SiteName from './SiteName/SiteName';
import "./TopNav.scss";

export default function TopNav() {
    interface InlineStyle {
        inlineStyle: CSSProperties
    }

    const [navStyleName, setNavStyleName] = useState('navigation');
    const [searchFocused, setSearchFocued] = useState(false);
    const [searchStyleName, setSearchStyleName] = useState('searchbar');

    return (
        <nav className='top'>
            <SiteName href='#' styleName='sitename' text='.mdwa'></SiteName>
            <Navigation styleName={navStyleName}></Navigation>
            <Search
                onFocus={() => {
                    setSearchStyleName('searchbar-expanded')
                    setNavStyleName('navigation-hidden')
                }}
                onBlur={() => {
                    setSearchStyleName('searchbar')
                    setNavStyleName('navigation')
                }}
                styleName={searchStyleName}
            ></Search>
            <Menu></Menu>
        </nav>
    )
}