import * as React from 'react';
import Icon from '../../Common/Image/Icon';
import OutsideClick from '../../Common/OutsideClick/OutsideClick';
import PopoverColumn from '../../Common/Popover/PopoverColumn/PopoverColumn';
import "./Menu.scss"

interface MenuProps {
    styleName?: string
}

function Menu(props: MenuProps) {
    const [displayPanel, setDisplayPanel] = React.useState(false);

    let items = new Map<string, string>();
    items.set("one", "hi");
    items.set("two", "hi2");

    return (
        <div tabIndex={0} onClick={() => { setDisplayPanel(!displayPanel) }} className={props.styleName ? props.styleName + " menu" : "menu"}>
            <Icon styleName='menu-icon' imagePath='/favicons/site.png'></Icon>
            {displayPanel && <PopoverColumn noClickBubbling shiftX={-100} shiftY={0} rtlRender itemStyleName='menu-column-item' styleName='menu-column' noAutoHidable elements={items}></PopoverColumn>}
        </div>
    );
}

export default Menu;