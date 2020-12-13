import React, {useState, useEffect} from 'react';
import axios from 'axios';

export function GetData() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function getUserData() {
            const resUserData = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setUserData(resUserData.data);
        }

        getUserData();
    }, []);

    return(
        <ul>
            {userData.map(user => <li key={user.id}>{user.title}</li>)}
        </ul>
    )
}