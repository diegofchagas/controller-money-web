import React from 'react'
import logo from '../../assets/logo.svg'
import Button from '../Button'
import { Container } from './styles'

const Header = () => {
  return (
    <Container>
      <div className='header'>
        <img src={logo} alt="logo" />
        <Button className='btn' nome= 'Nova Transação'/>
      </div>
    </Container>
  )
}

export default Header