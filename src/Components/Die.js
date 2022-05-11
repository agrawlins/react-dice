import React from "react";


const Die = (props) => {
    return (
        <div className="Die" onClick={props.handleClick}>
            <h1>{props.number}</h1>
        </div>
    )
}

export default Die