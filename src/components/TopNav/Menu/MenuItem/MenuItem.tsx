import * as React from 'react';
import { useRef } from 'react';
import { formClassName } from '../../../../utility/StyleUtils';
import "./MenuItem.scss"

interface MenuItemProps {
    className?: string
    text: string
    link?: string
}

function MenuItem(props: MenuItemProps) {
    return (
        <div key={props.text+props.link} className={formClassName('menu-item', props.className)}>
            <a href={props.link}>
                {props.text}
            </a>
        </div>
    );
}

export default MenuItem;