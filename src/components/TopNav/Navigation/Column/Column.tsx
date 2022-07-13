import * as React from 'react';
import { useRef, useState } from 'react';
import Portal from '../../../Common/Portal/Portal';
import ColumnItem from '../ColumnItem/ColumnItem';
import "./Column.scss"

interface ColumnProps {
    styleName?: string
    text: string
    elements?: Map<string, string>
}

function Column(props: ColumnProps) {
    
    const item = ColumnItem({text:'test'});

    const portal = Portal(item);

    let [shouldDisplay, setDisplay] = useState(false);

    function showEvent(event : React.MouseEvent){
        setDisplay(!shouldDisplay);
    }

    return (
        <div className={props.styleName ? props.styleName : "" + " column"} onClick={showEvent}>
            <span>
                {props.text}
            </span>

            {shouldDisplay && portal}
        </div>
    );
}

export default Column;