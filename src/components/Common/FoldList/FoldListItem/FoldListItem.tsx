import * as React from 'react';
import { useRef } from 'react';
import { formClassName } from '../../../../utility/StyleUtils';
import "./FoldListItem.scss"

interface FoldListItemProps {
    className?: string
    text: string
    link?: string
    noClickBubbling?: boolean
}

function FoldListItem(props: FoldListItemProps) {
    return (
        <div
            onClick={props.noClickBubbling ? (e: React.MouseEvent) => { e.stopPropagation() } : () => { }}
            key={props.text + props.link}
            className={formClassName('fold-list-item', props.className)}
        >
            <a href={props.link}>
                {props.text}
            </a>
        </div>
    );
}

export default FoldListItem;