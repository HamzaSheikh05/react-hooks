import React, { Component, useState } from 'react';

const HookCreation = (props) => {
    //const handleClick = () => setCounter(counter * 2);
    return(
        <button onClick={props.onClickFunction}>
            +1
        </button>
    )
}
const Display = (props) => {
    return(
        <div>
            {props.message}
        </div>
    )
}

const Application = () => {
    const [counter, setCounter] = useState(5);
    const incrementCounter = () => setCounter(counter + 1);
    return(
        <div>
            <HookCreation onClickFunction={incrementCounter}/>
            <Display message={counter}/>
        </div>
    )
}

export default Application;