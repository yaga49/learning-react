import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Accordion} from "./Accordion";

export default {
    title: 'AccordionCollapsed',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callback = action("on or off clicked")
const onClickedCallback = action("some item was clicked")

export const UnCollapsed: ComponentStory<typeof Accordion> = () => <Accordion
    titleValue={"menu"} collapsed={false}
    items={[{title: "blabka", id: 1}]}
    onChange={callback}
    onClick={onClickedCallback}
/>

export const UnCollapsedUsers = () => <Accordion
    titleValue={"users"} collapsed={false}
    items={[{title: "name1", id: 1}, {title: "name2", id: 2}, {title: "name3", id: 3}, {title: "name4", id: 4}]}
    onChange={action("colllapsed on or off")}
    onClick={onClickedCallback}
/>

export const CollapsedUsers = () => <Accordion
    titleValue={"users"} collapsed={true}
    items={[{title: "name1", id: 1}, {title: "name2", id: 2}, {title: "name3", id: 3}, {title: "name4", id: 4}]}
    onChange={action("colllapsed on or off")}
    onClick={onClickedCallback}
/>

export const CollapsedTextDynamic = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <Accordion
            titleValue={"users"} collapsed={accordionCollapsed}
            items={[{title: "name1", id: 1}, {title: "name2", id: 2}, {title: "name3", id: 3}, {title: "name4", id: 4}]}
            onChange={() => setAccordionCollapsed(!accordionCollapsed)}
            onClick={onClickedCallback}
        />
    )
}
