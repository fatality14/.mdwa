import React, { ReactNode, useEffect, useState } from "react";

interface HiddenHOCProps{
    isVisible? : boolean
    children : ReactNode | ReactNode[]
}

function HiddenHOC(props : HiddenHOCProps) {
    return (
        <>{props.isVisible && props.children}</>
    );
}

export default HiddenHOC;