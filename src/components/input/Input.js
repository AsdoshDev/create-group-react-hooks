import React from 'react'
import './input.styles.scss'
export const Input = ({ props: { id, label, value, name, placeholder, onChange } }) => {
    return (
        <div className='input-wrapper'>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input type='search' name={name} id={id} value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}
