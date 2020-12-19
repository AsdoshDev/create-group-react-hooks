import React from 'react';

import { User } from '../user/User';
import './user-list.styles.scss';

export const UserList = ({ list, toggleUser }) => {
    return (
        <div id="userList">
            {list.map((user, index) => <User key={index} toggleUser={e => toggleUser(e, user)} user={user} />)}
        </div>
    )
}
