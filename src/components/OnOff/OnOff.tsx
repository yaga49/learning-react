import React, {useState} from "react";
import s from "./OnOff.module.css"


type PropsType = {
    // switchOnOff: boolean
}


export function OnOff(props: PropsType ){

    let [switchOnOff, setSwitchOnOff] = useState(false)

    const onStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: switchOnOff === true ? "green" : "white"
    }
    const offStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        marginLeft: "2px",
        backgroundColor: switchOnOff === false ? "red" : "white"
    }
    const indicatorStyle={
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: switchOnOff === false ? "red" : "green"
    }

    return(
        <div>
            <div style={onStyle} onClick={()=>{setSwitchOnOff(true)}}>on</div>
            <div style={offStyle} onClick={()=>{setSwitchOnOff(false)}}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
