import React, { useState }  from "react";
import Die from "./Die";

const DiceBox = ({numbers}) => {
    return (
        <div className="DiceBox">
            <Die number={numbers[0]}/>
            <Die number={numbers[1]}/>
            <Die number={numbers[2]}/>
            <Die number={numbers[3]}/>
            <Die number={numbers[4]}/>
        </div>
    )
}

export default DiceBox