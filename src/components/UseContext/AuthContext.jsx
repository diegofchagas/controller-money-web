import React , {createContext, useState} from 'react'

export const AuthContext = createContext()

const UseProvider = ({children}) => {
  const [transacoes, setTransacoes ] = useState([])
  const [filtro, setFiltro] = useState([])


  const criarTransacoes = (transacao) => {
    setTransacoes([...transacoes, transacao])
  }

  const filtrarTransacoes = (transacoesFiltradas) => {
    setFiltro(transacoesFiltradas)
  }
  return (
    <AuthContext.Provider value={{transacoes, criarTransacoes, filtro, filtrarTransacoes}}>
      {children}
    </AuthContext.Provider>
  )
}

export default UseProvider