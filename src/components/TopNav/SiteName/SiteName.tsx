import * as React from 'react';
import { formClassName } from '../../../utility/StyleUtils';
import Icon from '../../Common/Image/Icon';
import "./SiteName.scss"

interface SiteNameProps {
    text: string
    className?: string
    href?: string
}

function SiteName(props: SiteNameProps) {
    return (
        <a href={props.href} className={formClassName('sitename', props.className)}>
            <Icon className='sitename-icon' imagePath='/favicons/site.png'></Icon>
            <span className='sitename-text'>{props.text}</span>
        </a>
    );
}

export default SiteName;