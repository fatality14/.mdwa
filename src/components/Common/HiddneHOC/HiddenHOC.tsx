import React, { ReactElement, ReactNode, useEffect, useState } from "react";

interface HiddenHOCProps{
    isHidden? : boolean
    children : ReactNode
}

function HiddenHOC(props : HiddenHOCProps) {
    return (
        <>{props.isHidden && props.children}</>
    );
}

export default HiddenHOC;