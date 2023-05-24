import React, {useEffect, useState} from "react";


const updateDate = (num: number) => num < 10 ? "0" + num : num
export const Clock  = () => {
    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setDate(new Date())
        },1000)
        return ()=>{
            clearInterval(intervalID)
        }
    },[])


    return <>
        <span>{updateDate(date.getHours())}</span>
        :
        <span>{updateDate(date.getMinutes())}</span>
        :
        <span>{updateDate(date.getSeconds())}</span>
    </>
}