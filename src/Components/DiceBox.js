import React from "react";
import Die from "./Die";

const DiceBox = (props) => {
    return (
        <div className="DiceBox">
            <Die number={props[0]}/>
            <Die number={props[1]}/>
            <Die number={props[2]}/>
        </div>
    )
}

export default DiceBox