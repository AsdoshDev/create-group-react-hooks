import React from 'react';
import './user.styles.scss';

export const User = ({ user, toggleUser }) => {
    console.log(user.selected)
    const { Image, name } = user;

    return (
        <div onClick={toggleUser} className={'user' + (user.selected ? ' active' : '')} >
            <img alt='' src={Image} />
            <span>{name}</span>
        </div>
    )
}
