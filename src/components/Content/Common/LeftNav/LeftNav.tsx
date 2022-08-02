import * as React from 'react';
import { useState, useEffect } from 'react';
import { formClassName } from '../../../../utility/StyleUtils';
import FoldList from '../../../Common/FoldList/FoldList';
import FoldListItem from '../../../Common/FoldList/FoldListItem/FoldListItem';
import "./LeftNav.scss"

interface LeftNavProps {
    className?: string
}

function LeftNav(props: LeftNavProps) {
    const flClass = 'left-nav-fold-list';
    const fllClass = 'left-nav-fold-list-item';
    const fliClass = 'left-nav-fold-list-item';

    return (
        <nav className={formClassName('left', props.className)}>
            <FoldList className={flClass} labelClassName={fllClass} text={'Header'}>
                <FoldListItem className={fliClass} text='1234567890'></FoldListItem>
                <FoldListItem className={fliClass} text='1234567890'></FoldListItem>
            </FoldList>
            <FoldList className={flClass} labelClassName={fllClass} text={'Header'}>
                <FoldListItem className={fliClass} text='1234567890'></FoldListItem>
                <FoldListItem className={fliClass} text='1234567890'></FoldListItem>
            </FoldList>
            <FoldList className={flClass} labelClassName={fllClass} text={'Header'}>
                <FoldListItem className={fliClass} text='1234567890'></FoldListItem>
                <FoldListItem className={fliClass} text='1234567890'></FoldListItem>
            </FoldList>
            <FoldList className={flClass} labelClassName={fllClass} text={'Header'}>
                <FoldListItem className={fliClass} text='1234567890'></FoldListItem>
                <FoldListItem className={fliClass} text='1234567890'></FoldListItem>
            </FoldList>
        </nav>
    );
}

export default LeftNav;
