import { stringify } from 'querystring';
import * as React from 'react';
import { formClassName } from '../../../utility/StyleUtils';
import HideablePopover from '../../Common/Popover/HideablePopover/HideablePopover';
import "./Navigation.scss"
import NavItem from './NavItem/NavItem';

interface NavigationProps {
    className?: string
}

function Navigation(props: NavigationProps) {
    const shiftY = 50;

    const hpClass = 'column';
    const niClass = 'column-item';
    const popId = 'navigation-popover';

    return (
        <div id='navigation' className={formClassName('navigation', props.className)}>
            <HideablePopover id={popId} hidden shiftX={0} shiftY={shiftY} className={hpClass} text='First col ⌄'>
                <NavItem className={niClass} text='First'></NavItem>
                <NavItem className={niClass} text='First'></NavItem>
                <NavItem className={niClass} text='First'></NavItem>
            </HideablePopover>
            <HideablePopover id={popId} hidden shiftX={0} shiftY={shiftY} className={hpClass} text='Second col ⌄'>
                <NavItem className={niClass} text='First'></NavItem>
                <NavItem className={niClass} text='First'></NavItem>
                <NavItem className={niClass} text='First'></NavItem>
            </HideablePopover>
            <HideablePopover id={popId} hidden shiftX={0} shiftY={shiftY} className={hpClass} text='Third col ⌄'>
                <NavItem className={niClass} text='First'></NavItem>
                <NavItem className={niClass} text='First'></NavItem>
                <NavItem className={niClass} text='First'></NavItem>
            </HideablePopover>
            <HideablePopover id={popId} hidden shiftX={0} shiftY={shiftY} className={hpClass} text='Fourth col ⌄'>
                <NavItem className={niClass} text='First'></NavItem>
                <NavItem className={niClass} text='First'></NavItem>
                <NavItem className={niClass} text='First'></NavItem>
            </HideablePopover>
        </div>
    );
}

export default Navigation;