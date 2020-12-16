import React from 'react';
import './button.styles.scss';

const Button = ({ props: { id, label, disabled, onClick } }) => {
    return (
        <button
            disabled={!!disabled}
            onClick={onClick}
            id={id}>{label}</button>
    )
}

export default Button;