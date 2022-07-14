import { stringify } from 'querystring';
import * as React from 'react';
import Column from './Column/Column';
import "./Navigation.scss"

interface NavigationProps {
    styleName?: string
}

function Navigation(props : NavigationProps) {
    const firstCol = new Map<string, string>();
    firstCol.set("one","val1");
    firstCol.set("two","val2");

    return (

        <div className={props.styleName + " navigation"}>
            <Column styleName='column' text='First col ⌄' elements={firstCol}></Column>
            <Column text='Second col ⌄' elements={firstCol}></Column>
            <Column text='Third col ⌄' elements={firstCol}></Column>
            <Column text='Fourth col ⌄' elements={firstCol}></Column>
        </div>
    );
}

export default Navigation;