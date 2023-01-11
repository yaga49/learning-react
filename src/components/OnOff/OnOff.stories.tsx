
import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";

import {OnOff} from "./OnOff";


export default {
    title: 'SwitchOnOff',
    component: OnOff,
};

const callback = action("on or off clicked")

export const OnMode = () => <OnOff switchOnOff={true} onChange={callback}/>
export const OffMode = () => <OnOff switchOnOff={false} onChange={callback}/>

export const ControlledSwitchOnOff = () => {
    let [switchOnOff, setSwitchOnOff] = useState<boolean>(false)
    return(
        <OnOff switchOnOff={switchOnOff} onChange={(switchOnOff)=>{setSwitchOnOff(switchOnOff)}}/>
    )
}
