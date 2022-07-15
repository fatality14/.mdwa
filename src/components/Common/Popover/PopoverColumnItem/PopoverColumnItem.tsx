import * as React from 'react';
import { useRef } from 'react';
import "./PopoverColumnItem.scss"

interface PopoverColumnItemProps {
    styleName?: string
    text: string
    link?: string
}

function PopoverColumnItem(props: PopoverColumnItemProps) {
    return (
        <div key={props.text+props.link} className={props.styleName ? props.styleName + " popover-column-item" : "popover-column-item"}>
            <a href={props.link}>
                {props.text}
            </a>
        </div>
    );
}

export default PopoverColumnItem;