import React, {useContext} from 'react';
import UserContext from './userContext';
import AddressContext from './addressContext';

export default function UpdateContextComponent() {
    const updateCurrentUserName = useContext(UserContext);
    const updateCurrentAddressName = useContext(AddressContext);

    const updatedName = "Updated Context Name";
    const updatedAddress = "Updated Context Address";

    console.log('updatecontext', updateCurrentUserName);

    return <button onClick={() => {updateCurrentUserName.onNameChange(updatedName); updateCurrentAddressName.onAddressChange(updatedAddress); }}>Update Context</button>
}