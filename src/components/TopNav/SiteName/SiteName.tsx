import * as React from 'react';
import Icon from '../../Common/Image/Icon';
import "./SiteName.scss"

interface SiteNameProps {
    text: string
    styleName?: string
    href?: string
}

function SiteName(props: SiteNameProps) {
    return (
        <a href={props.href} className={props.styleName + " sitename"}>
            <Icon styleName='sitename-icon' imagePath='/favicons/site.png'></Icon>
            <span className='sitename-text'>{props.text}</span>
        </a>
    );
}

export default SiteName;