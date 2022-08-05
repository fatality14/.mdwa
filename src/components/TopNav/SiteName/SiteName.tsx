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
        <a id='site-name' href={props.href} className={formClassName('site-name', props.className)}>
            <Icon className='icon' imagePath='/favicons/site.png'></Icon>
            <span className='text'>{props.text}</span>
        </a>
    );
}

export default SiteName;