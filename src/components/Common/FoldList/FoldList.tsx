import * as React from 'react';
import { useRef, useState } from 'react';
import FoldListItem from './FoldListItem/FoldListItem';
import "./FoldList.scss"

interface FoldListProps {
    styleName?: string
    itemStyleName?: string
    text: string
    elements: Map<string, string>
}

function FoldList(props: FoldListProps) {
    let [items, setItems] = useState<React.ReactElement[]>();
    let [expand, setExpand] = useState(true);


    React.useEffect(()=>{
        let items : React.ReactElement[] = [];

        props.elements?.forEach((v: string, k: string) => {
            let item = FoldListItem({noClickBubbling: true, link: v, text: k, styleName: (props.itemStyleName ? props.itemStyleName + ' fold-list-item' : 'fold-list-item') });
            items.push(item);
        });

        setItems(items);
    },[])

    return (
        <div onClick={()=>setExpand(!expand)} className={props.styleName ? props.styleName + " fold-list" : "fold-list"}>
            <div className={props.itemStyleName ? props.itemStyleName + ' fold-list-item' : 'fold-list-item'}>{props.text}</div>
            {expand && items}
        </div>
    );
}

export default FoldList;