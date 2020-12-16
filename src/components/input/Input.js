import React from 'react'
import './input.styles.scss'
export const Input = ({ props: { id, label, value, name, placeholder, onChange } }) => {
    return (
        <div className='input-wrapper'>
            <label htmlFor={id}>{label}</label>
            <input type='text' name={name} id={id} value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}
