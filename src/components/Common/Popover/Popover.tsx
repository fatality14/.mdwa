import Portal from "../Portal/Portal";
import "./Popover.scss"

interface PopoverProps {
    children: React.ReactNode,
    coords: { x: number, y: number }
}

function Popover(props: PopoverProps) {
    return (
        <Portal>
            <div className="popover" style={{ 'left': props.coords.x + 'px', 'top': props.coords.y + 'px' }}>
                {props.children}
            </div>
        </Portal>
    );
}

export default Popover;