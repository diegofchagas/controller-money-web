import React from 'react'
import logo from '../../assets/logo.svg'
import Button from '../Button'
import { Container } from './styles'

const Header = ({onModal}) => {
  return (
    <Container>
      <div className='header'>
        <h1>Controle Financeiro</h1>
        <Button className='btn' nome= 'Nova Transação' onClick={onModal}/>
      </div>
    </Container>
  )
}

export default Header