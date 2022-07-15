import * as React from 'react';
import Icon from '../../Common/Image/Icon';
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
        <div tabIndex={0} onBlur={()=>setDisplayPanel(false)} onClick={()=>{setDisplayPanel(!displayPanel)}} className={props.styleName ? props.styleName + " menu" : "menu"}>
            <Icon styleName='menu-icon' imagePath='/favicons/site.png'></Icon>
            {displayPanel && <PopoverColumn shiftX={-100} shiftY={0} rtlRender itemStyleName='menu-column-item' styleName='menu-column' noMouseEvents elements={items}></PopoverColumn>}
        </div>
    );
}

export default Menu;