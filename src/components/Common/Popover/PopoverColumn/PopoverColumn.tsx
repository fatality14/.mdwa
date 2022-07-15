import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Popover, { CoordsXY } from '../Popover';
import PopoverColumnItem from '../PopoverColumnItem/PopoverColumnItem';
import "./PopoverColumn.scss"

interface PopoverColumnProps {
    styleName?: string
    text?: string
    elements?: Map<string, string>
    itemStyleName?: string
    noMouseEvents?: boolean
    shiftX: number
    shiftY: number
    rtlRender?: boolean
}

function PopoverColumn(props: PopoverColumnProps) {
    const [display, setDisplay] = useState(false);
    const [items, setItems] = useState<React.ReactElement[]>([]);
    const [coordsXY, setCoordsXY] = useState<CoordsXY>();

    useEffect(() => {
        let items: React.ReactElement[] = [];

        props.elements?.forEach((v: string, k: string) => {
            let item = PopoverColumnItem({ link: v, text: k, styleName: (props.itemStyleName ? props.itemStyleName + ' popover-column-item' : 'popover-column-item') });
            items.push(item);
        });

        setItems(items);
    }, [])

    const topref = useRef<HTMLDivElement>(null);
    function showEvent(event: React.MouseEvent) {
        const coords = topref.current!.getBoundingClientRect();
        if(props.rtlRender){
            setCoordsXY({ x: coords.right + props.shiftX, y: coords.top + props.shiftY });
        }
        else{
            setCoordsXY({ x: coords.left + props.shiftX, y: coords.top + props.shiftY });
        }
        setDisplay(!display);
    }
    function hideEvent() {
        setDisplay(false);
    };

    window.addEventListener('resize', hideEvent)

    let [mouseEventProps, setMouseEventProps] = useState<any>();

    useEffect(() => {
        if (props.noMouseEvents) {
            setMouseEventProps({});
            setDisplay(true);
            const coords = topref.current!.getBoundingClientRect();
            if(props.rtlRender){
                setCoordsXY({ x: coords.right + props.shiftX, y: coords.top + props.shiftY });
            }
            else{
                setCoordsXY({ x: coords.left + props.shiftX, y: coords.top + props.shiftY });
            }
        }
        else {
            setMouseEventProps({
                onMouseEnter: showEvent,
                onMouseLeave: hideEvent
            })
        }
    }, [])

    return (
        <div ref={topref}
            className={props.styleName ? props.styleName + " popover-column" : "popover-column"} {...mouseEventProps}
        >
            <span>
                {props.text}
            </span>

            {
                display &&
                <Popover coords={coordsXY!}>{items}</Popover>
            }
        </div>
    );
}

export default PopoverColumn;