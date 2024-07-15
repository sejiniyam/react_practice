import React from "react";

function MultiCounterViewer({count}) {

    return (
        <>
        <h2>Multi Counter</h2>
        <h3>현재 카운트 : <br/>
        {count}</h3>
        </>
    );
}

export default MultiCounterViewer;