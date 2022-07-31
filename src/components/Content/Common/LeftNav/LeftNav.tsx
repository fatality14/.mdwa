import * as React from 'react';
import { useState, useEffect } from 'react';
import FoldList from '../../../Common/FoldList/FoldList';
import FoldListItem from '../../../Common/FoldList/FoldListItem/FoldListItem';
import "./LeftNav.scss"

interface LeftNavProps {
    styleName?: string
}

function LeftNav(props: LeftNavProps) {
    const elements = new Map<string, string>();
    elements.set("one", "to");
    elements.set("two", "fo");

    return (
        <nav className={props.styleName ? props.styleName + ' left' : 'left'}>
            <FoldList styleName='left-nav-fold-list' labelStyleName='left-nav-fold-list-item' text={'Header'}>
                <FoldListItem styleName='left-nav-fold-list-item' text='1234567890'></FoldListItem>
                <FoldListItem styleName='left-nav-fold-list-item' text='1234567890'></FoldListItem>
            </FoldList>
            <FoldList styleName='left-nav-fold-list' labelStyleName='left-nav-fold-list-item' text={'Header'}>
                <FoldListItem styleName='left-nav-fold-list-item' text='1234567890'></FoldListItem>
                <FoldListItem styleName='left-nav-fold-list-item' text='1234567890'></FoldListItem>
            </FoldList>
            <FoldList styleName='left-nav-fold-list' labelStyleName='left-nav-fold-list-item' text={'Header'}>
                <FoldListItem styleName='left-nav-fold-list-item' text='1234567890'></FoldListItem>
                <FoldListItem styleName='left-nav-fold-list-item' text='1234567890'></FoldListItem>
            </FoldList>
            <FoldList styleName='left-nav-fold-list' labelStyleName='left-nav-fold-list-item' text={'Header'}>
                <FoldListItem styleName='left-nav-fold-list-item' text='1234567890'></FoldListItem>
                <FoldListItem styleName='left-nav-fold-list-item' text='1234567890'></FoldListItem>
            </FoldList>
        </nav>
    );
}

export default LeftNav;
