import * as React from 'react';
import { formClassName } from '../../../utility/StyleUtils';
import Icon from '../../Common/Image/Icon';
import OutsideClick from '../../Common/OutsideClick/OutsideClick';
import HideablePopover from '../../Common/HideablePopover/HideablePopover';
import "./Menu.scss"
import MenuItem from './MenuItem/MenuItem';

interface MenuProps {
    className?: string
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
        while (target.parentElement) {
            target = target.parentElement;
            if (target.id == popoverId) {
                setHidden(false);
                flag = true;
                console.log(target);
                break;
            }
        }
        if (!flag) {
            setHidden(true);
        }
    }

    function hideEvent() {
        setHidden(true);
    };
    window.addEventListener('resize', hideEvent)

    return (
        <div id='menu' className={formClassName('menu', props.className)}>
            <OutsideClick onOutsideClick={outsideClickHandler}>
                <Icon onClick={foldHandler} className='icon' imagePath='/favicons/site.png'></Icon>
                <HideablePopover id={popoverId} hidden={isHidden} shiftX={-100} shiftY={0} rtlRender className='menu-column' noAutoHidable>
                    <MenuItem text='123' className='column-item'></MenuItem>
                    <MenuItem text='123' className='column-item'></MenuItem>
                    <MenuItem text='123' className='column-item'></MenuItem>
                </HideablePopover>
            </OutsideClick>
        </div>
    );
}

export default Menu;