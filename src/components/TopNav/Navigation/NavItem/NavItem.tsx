import * as React from 'react';
import { useRef } from 'react';
import "./NavItem.scss"

interface NavItemProps {
    styleName?: string
    text: string
    link?: string
}

function NavItem(props: NavItemProps) {
    return (
        <div key={props.text+props.link} className={props.styleName ? props.styleName + " nav-item" : "nav-item"}>
            <a href={props.link}>
                {props.text}
            </a>
        </div>
    );
}

export default NavItem;