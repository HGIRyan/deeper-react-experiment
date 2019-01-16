import React, { useState } from 'react';

function Hooks() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Hooks API Test</h1>
            <p>No More Class Components</p>
            <p>No More This</p>
            <p>No More setState</p>
            <p>{count}</p>
            <button onClick={()=> setCount(count + 1)}>Update</button>
        </>
    )
}

export default Hooks;