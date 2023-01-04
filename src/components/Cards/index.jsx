import React from 'react'
import {Card} from './styles'

const Cards = ({value,titulo, img, cor}) => {
  return (
    <Card cor={cor}>
      <header className='header'>
        <span className='titulo'>{titulo}</span>
        <img src={img} alt="seta" />
      </header>
      <span className='valor'>{value}</span>
    </Card>
  )
}

export default Cards