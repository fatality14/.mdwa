import * as React from 'react';
import Column from './Column/Column';
import "./Navigation.scss"

interface NavigationProps {
    styleName?: string    
}

function Navigation(props : NavigationProps) {
    return (  
        <div className={props.styleName + " navigation"}>
            <Column styleName='column' text='First col ▽'></Column>
            <Column text='Second col ▽'></Column>
            <Column text='Third col ▽'></Column>
            <Column text='Fourth col ▽'></Column>
        </div>
    );
}

export default Navigation;