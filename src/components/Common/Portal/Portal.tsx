import { ReactNode } from "react";
import { createPortal } from "react-dom";

function Portal(children : ReactNode) {
    const root = document.getElementById("moadal-root");
    return (  
        createPortal(children, root!)
    );
}

export default Portal;