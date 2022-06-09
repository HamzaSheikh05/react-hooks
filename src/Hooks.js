import React, { Component, useState } from 'react';

const HookCreation = () => {
    const [counter, setCounter] = useState(5);
    const handleClick = () => setCounter(counter * 2);
    return(
        <button onClick={handleClick}>
            {counter}
        </button>
    )
}

export default HookCreation;