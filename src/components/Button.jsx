import React from 'react'

const Button = ({nome, onClick, img, ...props}) => {
  return (
    <button {...props} onClick={onClick}>{nome} {img}</button>
  )
}

export default Button