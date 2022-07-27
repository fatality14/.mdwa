import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import useHideable from '../../useHideable/useHidden';
import Popover, { CoordsXY } from '../Popover';
import "./HideablePopover.scss"

interface HideablePopoverProps {
    styleName?: string
    children?: React.ReactNode | React.ReactNode[]
    text?: string
    noAutoHidable?: boolean
    shiftX: number
    shiftY: number
    rtlRender?: boolean
    hidden?: boolean
    id?: string
}

function HideablePopover(props: HideablePopoverProps) {
    const [coordsXY, setCoordsXY] = useState<CoordsXY>();

    const topref = useRef<HTMLDivElement>(null);
    function showEvent(event: React.MouseEvent) {
        const coords = topref.current!.getBoundingClientRect();
        if (props.rtlRender) {
            setCoordsXY({ x: coords.right + props.shiftX, y: coords.top + props.shiftY });
        }
        else {
            setCoordsXY({ x: coords.left + props.shiftX, y: coords.top + props.shiftY });
        }
        toggleHidden(false);

    }
    function hideEvent() {
        if(!props.noAutoHidable){
            toggleHidden(true);
        }
    };

    window.addEventListener('resize', hideEvent)

    let [mouseEventProps, setMouseEventProps] = useState<any>();

    useEffect(() => {
        if (props.noAutoHidable) {
            setMouseEventProps({});

            const coords = topref.current!.getBoundingClientRect();
            if (props.rtlRender) {
                setCoordsXY({ x: coords.right + props.shiftX, y: coords.top + props.shiftY });
            }
            else {
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

    useEffect(() => {
        toggleHidden(props.hidden);
    }, [props.hidden])
    
    const [popover, toggleHidden] = useHideable(<Popover id={props.id} coords={coordsXY}>{props.children}</Popover>, props.hidden ?? false);

    return (
        <div ref={topref}
            className={props.styleName ? props.styleName + " popover-column" : "popover-column"} {...mouseEventProps}
        >
            <span>
                {props.text}
            </span>
            {popover}
        </div>
    );
}

export default HideablePopover;