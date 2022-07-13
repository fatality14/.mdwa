import * as React from 'react';
import './Icon.scss';

interface IconProps{
    styleName? : string
    imagePath: string
}

function Icon(props : IconProps) {
    return ( 
        <div className={props.styleName}>
            <img draggable='false' src={props.imagePath}></img>
        </div>
    );
}

export default Icon;