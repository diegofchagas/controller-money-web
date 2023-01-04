import React, { useContext } from 'react'
import { AuthContext } from '../UseContext/AuthContext'

const Transacao = () => {
  
  const {transacoes,filtro} = useContext(AuthContext)
  return (
    <div>Transacao</div>
  )
}

export default Transacao