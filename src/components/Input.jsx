import React from 'react'

const Input = ({placeholder, type, value, onChange, ...props}) => {
  return (
    <input placeholder={placeholder} value={value} type={type} onChange={onChange} {...props}/>
  )
}

export default Input