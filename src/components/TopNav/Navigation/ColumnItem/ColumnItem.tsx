import * as React from 'react';
import "./ColumnItem.scss"

interface ColumnItemProps {
    styleName?: string
    text: string
    link?: string
}

function ColumnItem(props: ColumnItemProps) {
    return (
        <div className={props.styleName ? props.styleName : "" + " column-item"}>
            <span>
                {props.text}
            </span>
        </div>
    );
}

export default ColumnItem;