import * as React from 'react';
import { useState } from "react";
import HiddenHOC from "./HiddenHOC";

function useHiddeable(comp: React.ReactNode, hidden?: boolean) : [React.ReactNode, (state?: boolean) => void] {
    const [isHidden, setHidden] = useState(hidden ?? false);

    //HOC is necessary to bind component props for comp, else react will forget its references after hiding
    const hidableComp = <HiddenHOC isHidden = {!isHidden}>{comp}</HiddenHOC>

    function toggleHidden(state?: boolean) {
        setHidden(state ?? isHidden);
    }

    return [hidableComp, toggleHidden];
}

export default useHiddeable;