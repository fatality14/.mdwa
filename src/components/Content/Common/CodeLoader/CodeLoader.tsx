import * as React from 'react';
import { useRef } from 'react';
import { formClassName } from '../../../../utility/StyleUtils';
import "./CodeLoader.scss"

interface CodeLoaderProps {
    className?: string
    text: string
    link?: string
}

function CodeLoader(props: CodeLoaderProps) {
    return (
        <div key={props.text+props.link} className={formClassName('menu-item', props.className)}>
            <a href={props.link}>
                {props.text}
            </a>
        </div>
    );
}

export default CodeLoader;