import React, {useState} from 'react';

export default function EventHandling() {
    const [count, setCount] = useState(0);

    return(
        <>
            <h1>User has clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}