import React from 'react'
import './input.styles.scss'
import PropTypes from 'prop-types';
export const Input = ({ props: { id, label, value, name, placeholder, onChange, required } }) => {
    return (
        <div className='input-wrapper'>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input type='search' required={required} name={name} id={id} value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool
}
