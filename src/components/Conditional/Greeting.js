import React, {useState} from 'react';

export default function Greeting() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const userGreeting = () => {
        return <h1>Welcome Back</h1>
    }

    const guestGreeting = () => {
        return <h1>Please Login!</h1>
    }

    return(
        <>
            {isLoggedIn ? userGreeting() : guestGreeting()}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
        </>
    )
}