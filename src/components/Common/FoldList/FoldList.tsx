import * as React from 'react';
import { useRef, useState } from 'react';
import FoldListItem from './FoldListItem/FoldListItem';
import "./FoldList.scss"

interface FoldListProps {
    styleName?: string
    labelStyleName?: string
    text: string
    children: React.ReactElement | React.ReactElement[]
}

function FoldList(props: FoldListProps) {
    let [expand, setExpand] = useState(true);

    return (
        <div onClick={()=>setExpand(!expand)} className={props.styleName ? props.styleName + " fold-list" : "fold-list"}>
            <div className={props.labelStyleName ? props.labelStyleName + ' fold-list-item' : 'fold-list-item'}>{props.text}</div>
            {expand && props.children}
        </div>
    );
}

export default FoldList;