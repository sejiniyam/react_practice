import React, { useState } from "react";

function MultiCounterTest() {

    const [ number, setNumber ] = useState(0);
    const minus1 =() => {
        setNumber(preNumber => preNumber - 1);
    }

    const minus10 =() => {
        setNumber(preNumber => preNumber - 10);
    }

    const minus100 =() => {
        setNumber(preNumber => preNumber - 100);
    }

    const plus100 = () => {
        setNumber(preNumber => preNumber + 100);
    }

    const plus10 = () => {
        setNumber(preNumber => preNumber + 10);
    }

    const plus1 = () => {
        setNumber(preNumber => preNumber + 1);
    }

    return (
        <>
        <h1>Multi Counter</h1>
        <h3>현재 카운트 : <br/>
        {number}</h3>
        <button onClick={minus1}>-1</button>
        <button onClick={minus10}>-10</button>
        <button onClick={minus100}>-100</button>
        <button onClick={plus100}>+100</button>
        <button onClick={plus10}>+10</button>
        <button onClick={plus1}>+1</button>
        </>
    );
}

export default MultiCounterTest;