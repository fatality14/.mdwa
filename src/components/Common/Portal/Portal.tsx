import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps{
    children : ReactNode
}

function Portal(props : PortalProps) {
    const root = document.getElementById("moadal-root");
    return (  
        createPortal(props.children, root!)
    );
}

export default Portal;