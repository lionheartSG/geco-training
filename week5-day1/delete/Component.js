import React from "react"
import PropTypes from 'prop-types'

export const Input = ({size, type, onChange, placeholder, label, name}) => {
  return (
    <>
      <span>{label}</span>
      <input type={ type === 'text' ? 'text' : 'number'} name={name} placeholder={placeholder} onChange={onChange}/>
    </>
  )
}

Input.PropTypes = {
  type: PropTypes.oneOf(['string', 'number']),
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

Input.defaultProps = {
  type: 'text',
  name: 'Enter a value',
  label: 'label',
  placeholder: 'placeholder',
  onChange: 'onChange'
}
