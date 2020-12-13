import React, {useState} from 'react';
import UserContext from '../src/components/Context/userContext';
import AddressContext from '../src/components/Context/addressContext';
import ExampleContextComponent from '../src/components/Context/ExampleContextComponent';

export default function Context() {
    const [currentUser, setCurrentUser] = useState({ name: "Context Name" })
    const [currentAddress, setCurrentAddress] = useState({ address: "Context Address" })

    const handleNameChange = (name) => {
        setCurrentUser({ name: name })
    }

    const handleAddressChange = (address) => {
        setCurrentAddress({ address: address })
    }

    return(
        <UserContext.Provider value={{ name: currentUser.name, onNameChange: handleNameChange }}>
            <AddressContext.Provider value={{ address: currentAddress.address, onAddressChange: handleAddressChange }}>
                <ExampleContextComponent />
            </AddressContext.Provider>
        </UserContext.Provider>
    )
}