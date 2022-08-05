import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import HiddenHOC from '../../Common/useHideable/HiddenHOC';
import useHiddeable from '../../Common/useHideable/useHiddeable';
import Icon from '../../Common/Image/Icon';
import "./Search.scss"
import { formClassName } from '../../../utility/StyleUtils';

interface SearchProps {
    className?: string
    onFocus?: () => void;
    onBlur?: () => void;
}

function Search(props: SearchProps) {
    const inRef = useRef<HTMLInputElement>(null);

    //TODO: fix: activates two times cause of bubbling while input focus
    let onFocus = ()=>{
        toggleHidden(false);
        if(props.onFocus){
            props.onFocus!();
        }
    }
    let onBlur = ()=>{
        toggleHidden(true);
        if(props.onBlur){
            props.onBlur!();
        }
    }

    const textIn = <input ref={inRef} className="input" onBlur={onBlur} type='text'></input>;


    useEffect(()=>{
        if(textIn != null){
            inRef.current?.focus();
        }
    },[textIn]);

    const [hidableComp, toggleHidden] = useHiddeable(textIn, true);

    return (
        <div id='searchbar'
        onFocus={onFocus} tabIndex={0} 
        className={formClassName('searchbar', props.className)}
        >
            <Icon className='icon' imagePath={'/favicons/search.png'}></Icon>
            {hidableComp}
        </div>
    );
}

export default Search;