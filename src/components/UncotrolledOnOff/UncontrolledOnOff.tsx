import React, { useState } from "react";

type PropsType = {
    // on: boolean
    onChange: (on: boolean) => void
}

function UncontrolledOnOff(props: PropsType) {

    let [on, setIn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "100%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }


    return (
        <div>
            <div style={onStyle} onClick={() => {setIn(true); props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={() => {setIn(false); props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOff;