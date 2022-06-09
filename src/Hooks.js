import React, { Component, useState } from 'react';

const HookCreation = () => {
    const [counter, setCounter] = useState(5);
    return(
        <button onClick={()=> setCounter(counter * 2)}>
            {counter}
        </button>
    )
}

export default HookCreation;