import { ReactElement, ReactNode, useEffect, useRef } from "react";

interface OutsideClickProps {
    children: ReactNode
    onOutsideClick: (e : MouseEvent)=>void
}

export default function OutsideClick(props: OutsideClickProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event : MouseEvent) => {
        console.log()
        if (
            wrapperRef.current &&
            (!wrapperRef.current.contains(event.target as Node))
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