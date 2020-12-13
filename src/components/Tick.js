import React, { useState, useEffect } from 'react';

const Tick = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // For Mounting
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        // For Unmounting
        return () => clearInterval(interval);
      }, []);

    return(<h1>{seconds} will run on every mount</h1>)

}

export default Tick;