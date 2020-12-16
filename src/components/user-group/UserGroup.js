import React from 'react';

import { User } from '../user/User';
import './user-group.styles.scss';

export const UserGroup = ({ list, toggleUser }) => {
    return (
        <div id="userGroup">
            {list.map((user, index) => <User key={index} toggleUser={e => toggleUser(e, user)} user={user} />)}
        </div>
    )
}
