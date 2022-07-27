import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import useHideable from '../../HiddneHOC/useHidden';
import Popover, { CoordsXY } from '../Popover';
import PopoverColumnItem from '../PopoverColumnItem/PopoverColumnItem';
import "./PopoverColumn.scss"

interface PopoverColumnProps {
    styleName?: string
    text?: string
    elements?: Map<string, string>
    itemStyleName?: string
    noAutoHidable?: boolean
    shiftX: number
    shiftY: number
    rtlRender?: boolean
    noClickBubbling?: boolean
}

function PopoverColumn(props: PopoverColumnProps) {
    const [coordsXY, setCoordsXY] = useState<CoordsXY>();

    let items: React.ReactElement[] = [];
    props.elements?.forEach((v: string, k: string) => {
        let item = PopoverColumnItem({ link: v, text: k, styleName: (props.itemStyleName ? props.itemStyleName + ' popover-column-item' : 'popover-column-item') });
        items.push(item);
    });

    const topref = useRef<HTMLDivElement>(null);
    function showEvent(event: React.MouseEvent) {
        const coords = topref.current!.getBoundingClientRect();
        if(props.rtlRender){
            setCoordsXY({ x: coords.right + props.shiftX, y: coords.top + props.shiftY });
        }
        else{
            setCoordsXY({ x: coords.left + props.shiftX, y: coords.top + props.shiftY });
        }
        toggleHidden(false);
        
    }
    function hideEvent() {        
        toggleHidden(true);
    };

    window.addEventListener('resize', hideEvent)

    let [mouseEventProps, setMouseEventProps] = useState<any>();

    useEffect(() => {
        if (props.noAutoHidable) {
            setMouseEventProps({});
            toggleHidden(false);
            
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

    const [popover, toggleHidden] = useHideable(<Popover noClickBubbling={props.noClickBubbling} outsideClick={()=>{toggleHidden(true)}} coords={coordsXY}>{items}</Popover>, true);
    // const popover = <Popover noClickBubbling={props.noClickBubbling} outsideClick={()=>{setHidden(true)}} coords={coordsXY}>{items}</Popover>;

    return (
        <div ref={topref}
            className={props.styleName ? props.styleName + " popover-column" : "popover-column"} {...mouseEventProps}
        >
            <span>
                {props.text}
            </span>
            {popover}
            {/* {!isHidden && popover} */}
        </div>
    );
}

export default PopoverColumn;