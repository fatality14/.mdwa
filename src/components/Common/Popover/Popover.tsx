import { useEffect } from "react";
import OutsideClick from "../OutsideClick/OutsideClick";
import Portal from "../Portal/Portal";
import "./Popover.scss"

interface PopoverProps {
    children: React.ReactNode,
    coords?: { x: number, y: number }
    outsideClick: (e: MouseEvent) => void
    noClickBubbling?: boolean
}

export interface CoordsXY {
    x: number, y: number
}

function Popover(props: PopoverProps) {
    function stopClickProp(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
    }

    let style: any = {'left': 0 + 'px', 'top': 0 + 'px'};
    if(props.coords){
        style =  { 'left': props.coords.x + 'px', 'top': props.coords.y + 'px' }
    }

    return (
        <Portal>
            <OutsideClick onOutsideClick={props.outsideClick}>
                <div onClick={props.noClickBubbling ? stopClickProp : ()=>{}} className="popover" style={style}>
                    {props.children}
                </div>
            </OutsideClick>
        </Portal>
    );
}

export default Popover;