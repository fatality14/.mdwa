import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Popover from '../../../Common/Popover/Popover';
import ColumnItem from '../ColumnItem/ColumnItem';
import "./Column.scss"

interface ColumnProps {
    styleName?: string
    text: string
    elements?: Map<string, string>
}

function Column(props: ColumnProps) {

    const [display, setDisplay] = useState(false);
    const [coords, setCoords] = useState<DOMRect>();
    const [items, setItems] = useState<React.ReactElement[]>([]);

    useEffect(() => {
        let items: React.ReactElement[] = [];

        props.elements?.forEach((v: string, k: string) => {
            let item = ColumnItem({ link: v, text: k, styleName: 'column-item' });
            items.push(item);
        });

        setItems(items);
        console.log(items);
    }, [])

    const topref = useRef<HTMLDivElement>(null);
    function showEvent(event: React.MouseEvent) {
        setCoords(topref.current!.getBoundingClientRect());
        setDisplay(!display);
    }
    function hideEvent(){
        setDisplay(false);
    };

    window.addEventListener('resize', hideEvent)

    return (
        <div ref={topref} className={props.styleName ? props.styleName : "" + " column"} onMouseEnter={showEvent} onMouseLeave={hideEvent}>
            <span>
                {props.text}
            </span>

            {
                display &&
                <Popover coords={{ x: coords!.left, y: 50 }}>{items}</Popover>
            }
        </div>
    );
}

export default Column;