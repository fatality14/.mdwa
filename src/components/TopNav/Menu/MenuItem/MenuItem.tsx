import * as React from 'react';
import { useRef } from 'react';
import "./MenuItem.scss"

interface MenuItemProps {
    styleName?: string
    text: string
    link?: string
}

function MenuItem(props: MenuItemProps) {
    return (
        <div key={props.text+props.link} className={props.styleName ? props.styleName + " menu-item" : "menu-item"}>
            <a href={props.link}>
                {props.text}
            </a>
        </div>
    );
}

export default MenuItem;