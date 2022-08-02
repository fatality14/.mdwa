import { ReactNode, useEffect, useRef } from "react";
import useWrapref from "../useWrapref/useWrapref";

interface OutsideClickProps {
    children: ReactNode | ReactNode[]
    onOutsideClick: (e : MouseEvent)=>void
}

export default function OutsideClick(props: OutsideClickProps) {
    const [rendComp, wrapperRef] = useWrapref(props.children)

    const handleClickOutside = (event : MouseEvent) => {
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
        <>{rendComp}</>
    )
}