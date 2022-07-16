import * as React from 'react';
import { useRef } from 'react';
import "./FoldListItem.scss"

interface FoldListItemProps {
    styleName?: string
    text: string
    link?: string
    noClickBubbling?: boolean
}

function FoldListItem(props: FoldListItemProps) {
    return (
        <div onClick={props.noClickBubbling ? (e: React.MouseEvent)=>{e.stopPropagation()} : ()=>{}} key={props.text+props.link} className={props.styleName ? props.styleName + " popover-column-item" : "popover-column-item"}>
            <a href={props.link}>
                {props.text}
            </a>
        </div>
    );
}

export default FoldListItem;