import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Icon from '../../Common/Image/Icon';
import "./Search.scss"

interface SearchProps {
    styleName?: string
    onFocus?: () => void;
    onBlur?: () => void;
}

function Search(props: SearchProps) {
    const [showTextIn, setTextIn] = useState(false);
    const inRef = useRef<HTMLInputElement>(null);

    let onFocus = ()=>{
        if(props.onFocus){
            props.onFocus!();
        }
        setTextIn(true);
        inRef.current?.focus();
    }
    let onBlur = ()=>{
        if(props.onBlur){
            props.onBlur!();
        }
        setTextIn(false);
    }

    useEffect(()=>{
        if(showTextIn){
            inRef.current?.focus();
        }
    },[showTextIn]);

    return (
        <div 
        onFocus={onFocus} tabIndex={0} 
        className={props.styleName ? props.styleName : "" + " searchbar"}
        >
            <Icon styleName='searchbar-icon' imagePath={'/favicons/search.png'}></Icon>
            {showTextIn && <input ref={inRef} onBlur={onBlur} type='text'></input>}
        </div>
    );
}

export default Search;