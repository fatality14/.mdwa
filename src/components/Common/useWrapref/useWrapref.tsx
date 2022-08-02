import { ReactNode, RefObject, useRef } from "react";


function useWrapref(comp: React.ReactNode | ReactNode[], props?: {}) : [React.ReactNode, RefObject<HTMLDivElement>] {
    const ref = useRef<HTMLDivElement>(null);
    const retComp = <div ref={ref} {...props}>{comp}</div>
    return [retComp, ref]
}

export default useWrapref;