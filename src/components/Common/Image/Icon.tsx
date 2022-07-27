import * as React from 'react';
import './Icon.scss';

interface IconProps{
    styleName? : string
    imagePath: string
    onClick?: (e: React.MouseEvent<HTMLDivElement>)=>void
}

function Icon(props : IconProps) {
    return ( 
        <div onClick={props.onClick} className={props.styleName}>
            <img draggable='false' src={props.imagePath}></img>
        </div>
    );
}

export default Icon;