import { ReactElement, useEffect, useRef } from "react";

interface OutsideClickProps {
    children?: ReactElement | ReactElement[] | boolean
    onOutsideClick: (e : MouseEvent)=>void
}

export default function OutsideClick(props: OutsideClickProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event : MouseEvent) => {
        if (
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target as Node)
        ) {
            props.onOutsideClick(event);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return (
            () => {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        )
    }, [])

    return(
        <div ref={wrapperRef}>{props.children}</div>
    )
}