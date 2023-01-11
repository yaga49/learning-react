
import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";




export default {
    title: 'AccordionCollapsed',
    component: Accordion,
};

const callback = action("on or off clicked")

export const CollapsedOff = () => <Accordion titleValue={"menu"} collapsed={false} onChange={action("colllapsed on or off")}/>
export const CollapsedOn = () => <Accordion titleValue={"menu"} collapsed={true} onChange={action("colllapsed on or off")}/>

export const CollapsedTextOnOff = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return(
        <Accordion titleValue={"menu"} collapsed={accordionCollapsed} onChange={()=>setAccordionCollapsed(!accordionCollapsed)}/>
    )
}
