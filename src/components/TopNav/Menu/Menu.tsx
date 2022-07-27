import * as React from 'react';
import Icon from '../../Common/Image/Icon';
import OutsideClick from '../../Common/OutsideClick/OutsideClick';
import HideablePopover from '../../Common/Popover/HideablePopover/HideablePopover';
import "./Menu.scss"
import MenuItem from './MenuItem/MenuItem';

interface MenuProps {
    styleName?: string
}

function Menu(props: MenuProps) {
    const [isHidden, setHidden] = React.useState(true);
    const popoverId = 'menu-popover';

    function foldHandler(e: React.MouseEvent<HTMLDivElement>) {
        setHidden(!isHidden)
    }

    function outsideClickHandler(e: MouseEvent) {
        let target = (e.target as Element);
        let flag = false;
        while(target.parentElement){
            target = target.parentElement;
            if (target.id == popoverId) {
                setHidden(false);
                flag = true;
                console.log(target);
                break;
            }
        }
        if(!flag){
            setHidden(true);
        }
    }

    return (
        <div className={props.styleName ? props.styleName + " menu" : "menu"}>
            <OutsideClick onOutsideClick={outsideClickHandler}>
                <Icon onClick={foldHandler} styleName='menu-icon' imagePath='/favicons/site.png'></Icon>
                <HideablePopover id={popoverId} hidden={isHidden} shiftX={-100} shiftY={0} rtlRender styleName='menu-column' noAutoHidable>
                    <MenuItem text='123' styleName='menu-column-item'></MenuItem>
                    <MenuItem text='123' styleName='menu-column-item'></MenuItem>
                    <MenuItem text='123' styleName='menu-column-item'></MenuItem>
                </HideablePopover>
            </OutsideClick>
        </div>
    );
}

export default Menu;