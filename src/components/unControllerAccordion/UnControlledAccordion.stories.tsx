
import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";

import {UnControllerAccordion} from "./UnControllerAccordion";




export default {
    title: 'UnControllerAccordion',
    component: UnControllerAccordion,
};

const callback = action("on or off clicked")


export const CollapsedTextOnOff = () => {

    return(
        <UnControllerAccordion titleValue={"menu"} />
    )
}
