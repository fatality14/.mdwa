import { ReactNode, useEffect } from "react";
import OutsideClick from "../../OutsideClick/OutsideClick";
import Portal from "../../Portal/Portal";
import "./Popover.scss"

interface PopoverProps {
    children: React.ReactNode | ReactNode[]
    coords?: { x: number, y: number }
    id?: string
}

export interface CoordsXY {
    x: number, y: number
}

function Popover(props: PopoverProps) {
    let style: any = {'left': 0 + 'px', 'top': 0 + 'px'};
    if(props.coords){
        style =  { 'left': props.coords.x + 'px', 'top': props.coords.y + 'px' }
    }

    return (
        <Portal>
                <div id = {props.id} className="popover" style={style}>
                    {props.children}
                </div>
        </Portal>
    );
}

export default Popover;