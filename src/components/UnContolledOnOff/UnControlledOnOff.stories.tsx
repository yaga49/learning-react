
import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnControlledOnOff} from "./UnControlledOnOff";




export default {
    title: 'UnControlledSwitchOnOff',
    component: UnControlledOnOff,
};

const callback = action("on or off clicked")


export const UnControlledSwitchOff = () => <UnControlledOnOff defaultSwitch ={false} />
export const UnControlledSwitchOn = () => <UnControlledOnOff defaultSwitch ={true} />
