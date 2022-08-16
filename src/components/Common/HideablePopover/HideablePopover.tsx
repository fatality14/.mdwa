import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { formClassName } from '../../../utility/StyleUtils';
import useHideable from '../useHideable/useHiddeable';
import useWrapref from '../useWrapref/useWrapref';
import Popover, { CoordsXY } from './Popover/Popover';
import "./HideablePopover.scss"

interface HideablePopoverProps {
    className?: string
    children?: React.ReactNode | React.ReactNode[]
    text?: string
    noAutoHidable?: boolean
    shiftX: number
    shiftY: number
    rtlRender?: boolean
    hidden?: boolean
    id: string
}

function HideablePopover(props: HideablePopoverProps) {
    const [coordsXY, setCoordsXY] = useState<CoordsXY>();

    function calcCoords() {
        if (wrapref.current) {
            const coords = wrapref.current!.getBoundingClientRect();
            if (props.rtlRender) {
                setCoordsXY({ x: coords.right + props.shiftX, y: coords.top + props.shiftY });
            }
            else {
                setCoordsXY({ x: coords.left + props.shiftX, y: coords.top + props.shiftY });
            }
        }
    }

    function showEvent(event: React.MouseEvent) {
        calcCoords();
        toggleHidden(false);
    }
    function hideEvent() {
        if (!props.noAutoHidable) {
            toggleHidden(true);
        }
    };

    window.addEventListener('resize', hideEvent)

    let [mouseEventProps, setMouseEventProps] = useState<any>();

    useEffect(() => {
        if (props.noAutoHidable) {
            setMouseEventProps({});
        }
        else {
            setMouseEventProps({
                onMouseEnter: showEvent,
                onMouseLeave: hideEvent
            })
        }
    }, [])

    useEffect(() => {
        calcCoords();
        toggleHidden(props.hidden);
    }, [props.hidden])

    const [popover, toggleHidden] = useHideable(<Popover id={props.id} coords={coordsXY}>{props.children}</Popover>, props.hidden ?? false);


    const [rendComp, wrapref] = useWrapref(
        <>
            <span> {props.text} </span>
            {popover}
        </>,
        { className: formClassName('popover-column', props.className), ...mouseEventProps })

    return (
        <>{rendComp}</>
    );
}

export default HideablePopover;