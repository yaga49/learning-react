import React, {useEffect, useState} from "react";

export default {
    title: 'useState demo',

}


export const Example1 = () => {
    const [count, setCount] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(()=>{
        console.log("useEffect every render")
    })
    useEffect(()=>{
        console.log("useEffect first render(componentDidMount)")
    }, [])
    useEffect(()=>{
        console.log("useEffect first render and every counter change")
    },[count])


    return (
        <>
            <button onClick={()=>{setFake(fake+1)}}>fake+</button>
            <button onClick={()=>{setCount(count+1)}}>count+</button>

            count {count},fake {fake}
        </>
    )
}


export const Example2 = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setCount(state => state + 1)
        },1000)
    }, [])

    return (
        <>
            count: {count}
        </>
    )
}

