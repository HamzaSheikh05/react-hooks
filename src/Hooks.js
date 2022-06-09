import React, { Component, useState } from 'react';

const HookCreation = (props) => {
    const handleClick = () => props.onClickFunction(props.increment);
    return(
        <button onClick={handleClick}>
            +{props.increment}
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
    const [counter, setCounter] = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
    return(
        <div>
            <HookCreation onClickFunction={incrementCounter} increment={1}/>
            <HookCreation onClickFunction={incrementCounter} increment={5}/>
            <HookCreation onClickFunction={incrementCounter} increment={10}/>
            <HookCreation onClickFunction={incrementCounter} increment={20}/>
            <HookCreation onClickFunction={incrementCounter} increment={50}/>
            <Display message={counter}/>
        </div>
    )
}

export default Application;