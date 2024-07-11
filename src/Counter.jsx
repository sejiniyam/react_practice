import React, { useState } from "react";

function Counter() {
    const [ number, setNumber ] = useState(0);

    const onIncrement = () => {
        setNumber(number + 1);
    };

    const onDecrement = () => {
        setNumber(number - 1);
    };

    return (
        <>
        <h1>{number}</h1>
        <button onClick={onIncrement}>+1</button>
        <button onClick={onDecrement}>-1</button>
        </>
    );
}

export default Counter;