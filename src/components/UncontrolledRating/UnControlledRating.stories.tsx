
import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";

import {UnControlledRating} from "./UnControlledRating";


export default {
    title: 'UnControlledRating',
    component: UnControlledRating,
};


export const ControlledRating = () => {

    return(
        <UnControlledRating/>
    )
}
