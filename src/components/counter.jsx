import React, { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert("Decrement not possible");
        }
    }

    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <h1>{count}</h1>
        </div>
    )
}

export default Counter;