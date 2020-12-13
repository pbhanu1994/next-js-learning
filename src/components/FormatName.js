import React, { Component } from 'react';

class FormatName extends Component {
    state = {  }
    render() { 
        const user = {
          firstName: 'John',
          lastName: 'Doe'
        };

        function formatName(user) {
            return user.firstName + ' ' + user.lastName;
        }

        return ( <h1>
            Hello, {formatName(user)}!
          </h1> );
    }
}
 
export default FormatName;