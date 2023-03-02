import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
};

export const BaseExample = () => {
    const [value, setValue] = useState('2')
    return (
        <Select
            value={value}
            onClick={setValue}
            items={[
                {value: '1', title: 'minsk'},
                {value: '2', title: 'moscow'},
                {value: '3', title: 'kiev'},

            ]}
        />
    )
}
