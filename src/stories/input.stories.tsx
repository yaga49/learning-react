// Button.stories.ts|tsx

import React, {ChangeEvent, useRef, useState} from 'react';

import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {Simulate} from "react-dom/test-utils";




export default {
    title: 'Input',
    // component: Button,
}

export const UnControlledInput = () => <input/>;
export const TrackValueOfUnControlledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return (
        <>
            <input onChange={onChange}/> - {value}
        </>
    )
}
export const GetValueOfUnControlledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = ()=>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/> <button onClick={save}>save</button> actual value:  {value}
        </>
    )
}
