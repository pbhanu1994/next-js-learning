import React, {useContext} from 'react';
import UserContext from './userContext';
import AddressContext from './addressContext';
import UpdateContextComponent from './UpdateContextComponent';

export default function ExampleContextComponent() {
    const currentUserName = useContext(UserContext)
    const currentAddressName = useContext(AddressContext)

    return(
        <>
            <h1>{currentUserName.name}</h1>
            <h1>{currentAddressName.address}</h1>
            <UpdateContextComponent />
        </>
    )
}
