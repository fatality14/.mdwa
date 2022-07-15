import { stringify } from 'querystring';
import * as React from 'react';
import PopoverColumn from '../../Common/Popover/PopoverColumn/PopoverColumn';
import "./Navigation.scss"

interface NavigationProps {
    styleName?: string
}

function Navigation(props : NavigationProps) {
    const firstCol = new Map<string, string>();
    firstCol.set("one","val1");
    firstCol.set("two","val2");

    const shiftY = 50;

    return (
        <div className={props.styleName + " navigation"}>
            <PopoverColumn shiftX={0} shiftY={shiftY} itemStyleName='navigation-column-item' styleName='navigation-column' text='First col ⌄' elements={firstCol}></PopoverColumn>
            <PopoverColumn shiftX={0} shiftY={shiftY} itemStyleName='navigation-column-item' styleName='navigation-column' text='Second col ⌄' elements={firstCol}></PopoverColumn>
            <PopoverColumn shiftX={0} shiftY={shiftY} itemStyleName='navigation-column-item' styleName='navigation-column' text='Third col ⌄' elements={firstCol}></PopoverColumn>
            <PopoverColumn shiftX={0} shiftY={shiftY} itemStyleName='navigation-column-item' styleName='navigation-column' text='Fourth col ⌄' elements={firstCol}></PopoverColumn>
        </div>
    );
}

export default Navigation;