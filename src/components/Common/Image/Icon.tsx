import * as React from 'react';
import { formClassName } from '../../../utility/StyleUtils';
import './Icon.scss';

interface IconProps{
    className? : string
    imagePath: string
    onClick?: (e: React.MouseEvent<HTMLDivElement>)=>void
}

function Icon(props : IconProps) {
    return ( 
        <div onClick={props.onClick} className={formClassName('icon', props.className)}>
            <img draggable='false' src={props.imagePath}></img>
        </div>
    );
}

export default Icon;