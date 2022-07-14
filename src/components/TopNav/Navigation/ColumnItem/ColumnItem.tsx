import * as React from 'react';
import { useRef } from 'react';
import "./ColumnItem.scss"

interface ColumnItemProps {
    styleName?: string
    text: string
    link?: string
}

function ColumnItem(props: ColumnItemProps) {
    return (
        <div key={props.text+props.link} className={props.styleName ? props.styleName : "" + " column-item"}>
            <a href={props.link}>
                {props.text}
            </a>
        </div>
    );
}

export default ColumnItem;