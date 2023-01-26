import React, { useState } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prev) => prev + 1)
    }

    const decrement = () => {
        setCount((prev) => prev - 1)
    }

    return (
        <div>
            <h1>Render props counter</h1>
            {props.render(count, increment, decrement)}
        </div>
    );
}

export default Counter;