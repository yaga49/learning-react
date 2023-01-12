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
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
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
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            actual value: {value}
        </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return(
        <input value={parentValue} onChange={onChange}/>
    )

}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return(
        <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | number | readonly string[] | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return(
        <select value={parentValue} onChange={onChange}>
            <option> none</option>
            <option value={"2"}>Minsk</option>
            <option value={"3"}>Moscow</option>
            <option value={"4"}>Kiev</option>
        </select>
    )
}