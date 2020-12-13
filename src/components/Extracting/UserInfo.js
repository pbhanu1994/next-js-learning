import React from 'react';
import { Avatar } from './Avatar';

export const UserInfo = ({user}) => {
    return(
        <div className="UserInfo">
          <Avatar user={user}/>
          <div className="UserInfo-name">
            {user.name}
          </div>
        </div>
    )
}