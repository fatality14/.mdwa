import * as React from 'react';
import { useRef, useState } from 'react';
import FoldListItem from './FoldListItem/FoldListItem';
import "./FoldList.scss"
import { formClassName } from '../../../utility/StyleUtils';

interface FoldListProps {
    className?: string
    labelClassName?: string
    text: string
    children: React.ReactNode | React.ReactNode[]
}

function FoldList(props: FoldListProps) {
    let [expand, setExpand] = useState(true);

    return (
        <div className={formClassName('fold-list', props.className)}>
            <div onClick={()=>setExpand(!expand)} className={formClassName('fold-list-label', props.labelClassName)}>{props.text}</div>
            {expand && props.children}
        </div>
    );
}

export default FoldList;