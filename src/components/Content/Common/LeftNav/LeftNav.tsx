import * as React from 'react';
import { useState, useEffect } from 'react';
import FoldList from '../../../Common/FoldList/FoldList';
import "./LeftNav.scss"

interface LeftNavProps{
    styleName?: string
}

function LeftNav(props: LeftNavProps) {
    const elements = new Map<string, string>();
    elements.set("one", "to");
    elements.set("two", "fo");

    return (
        <nav className={props.styleName ? props.styleName + ' left' : 'left'}>
            <FoldList styleName='left-nav-fold-list' itemStyleName='left-nav-fold-list-item' elements={elements} text={'Header'}></FoldList>
            <FoldList styleName='left-nav-fold-list' itemStyleName='left-nav-fold-list-item' elements={elements} text={'Header'}></FoldList>
            <FoldList styleName='left-nav-fold-list' itemStyleName='left-nav-fold-list-item' elements={elements} text={'Header'}></FoldList>
            <FoldList styleName='left-nav-fold-list' itemStyleName='left-nav-fold-list-item' elements={elements} text={'Header'}></FoldList>
        </nav>
    );
}

export default LeftNav;
