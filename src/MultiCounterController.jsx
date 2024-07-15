import React from "react";

//요래됐으여
function MultiCounterController({calculator}) {

    return (
        <>
            <button onClick={() => calculator(-1)}>-1</button>
            <button onClick={() => calculator(-10)}>-10</button>
            <button onClick={() => calculator(-100)}>-100</button>
            <button onClick={() => calculator(+100)}>+100</button>
            <button onClick={() => calculator(+10)}>+10</button>
            <button onClick={() => calculator(+1)}>+1</button>
        </>
    );
}

{/* 이랬는데
function MultiCounterController({toValue}) {

    return (
        <>
            <button value='-1' onClick={toValue}>-1</button>
            <button value='-10' onClick={toValue}>-10</button>
            <button value='-100' onClick={toValue}>-100</button>
            <button value='+100' onClick={toValue}>+100</button>
            <button value='+10' onClick={toValue}>+10</button>
            <button value='+1' onClick={toValue}>+1</button>
        </>
    );
}
*/}

export default MultiCounterController;