import { stringify } from 'querystring';
import * as React from 'react';
import HideablePopover from '../../Common/Popover/HideablePopover/HideablePopover';
import "./Navigation.scss"
import NavItem from './NavItem/NavItem';

interface NavigationProps {
    styleName?: string
}

function Navigation(props: NavigationProps) {
    const shiftY = 50;

    return (
        <div className={props.styleName + " navigation"}>
            <HideablePopover hidden shiftX={0} shiftY={shiftY} styleName='navigation-column' text='First col ⌄'>
                <NavItem styleName='navigation-column-item' text='First'></NavItem>
                <NavItem styleName='navigation-column-item' text='First'></NavItem>
                <NavItem styleName='navigation-column-item' text='First'></NavItem>
            </HideablePopover>
            <HideablePopover hidden shiftX={0} shiftY={shiftY} styleName='navigation-column' text='Second col ⌄'>
                <NavItem styleName='navigation-column-item' text='First'></NavItem>
                <NavItem styleName='navigation-column-item' text='First'></NavItem>
                <NavItem styleName='navigation-column-item' text='First'></NavItem>
            </HideablePopover>
            <HideablePopover hidden shiftX={0} shiftY={shiftY} styleName='navigation-column' text='Third col ⌄'>
                <NavItem styleName='navigation-column-item' text='First'></NavItem>
                <NavItem styleName='navigation-column-item' text='First'></NavItem>
                <NavItem styleName='navigation-column-item' text='First'></NavItem>
            </HideablePopover>
            <HideablePopover hidden shiftX={0} shiftY={shiftY} styleName='navigation-column' text='Fourth col ⌄'>
                <NavItem styleName='navigation-column-item' text='First'></NavItem>
                <NavItem styleName='navigation-column-item' text='First'></NavItem>
                <NavItem styleName='navigation-column-item' text='First'></NavItem>
            </HideablePopover>
        </div>
    );
}

export default Navigation;