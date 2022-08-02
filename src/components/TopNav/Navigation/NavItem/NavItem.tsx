import * as React from 'react';
import { useRef } from 'react';
import { formClassName } from '../../../../utility/StyleUtils';
import "./NavItem.scss"

interface NavItemProps {
    className?: string
    text: string
    link?: string
}

function NavItem(props: NavItemProps) {
    return (
        <div key={props.text+props.link} className={formClassName('nav-item', props.className)}>
            <a href={props.link}>
                {props.text}
            </a>
        </div>
    );
}

export default NavItem;