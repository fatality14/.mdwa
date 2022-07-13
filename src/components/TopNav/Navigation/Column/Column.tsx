import * as React from 'react';
import { useRef, useState } from 'react';
import ColumnItem from '../ColumnItem/ColumnItem';
import "./Column.scss"

interface ColumnProps {
    styleName?: string
    text: string
    elements?: Map<string, string>
}

function Column(props: ColumnProps) {
    
    const item = ColumnItem({text:'test'});

    let [shouldDisplay, setDisplay] = useState(false);

    function showEvent(event : React.MouseEvent){
        setDisplay(!shouldDisplay);
    }

    return (
        <div className={props.styleName ? props.styleName : "" + " column"} onClick={showEvent}>
            <span>
                {props.text}
            </span>

            {shouldDisplay && item}
        </div>
    );
}

export default Column;