import React , {createContext, useState} from 'react'

export const AuthContext = createContext()

const UseProvider = ({children}) => {
    const [transacoes, setTransacoes ] = useState(()=> {
    const  storedTransactions = localStorage.getItem('transactions');
    return storedTransactions ? JSON.parse(storedTransactions) : [];
  });
  const [filtro, setFiltro] = useState([]);


  const criarTransacoes = (transacao) => {
    setTransacoes([...transacoes, transacao])
  }

  const deleteTransacoes = (id) =>{
    const novasTransacoes = transacoes.filter((transacao) => transacao.id !== id);
    setTransacoes(novasTransacoes);
  }

  const filtrarTransacoes = (transacoesFiltradas) => {
    setFiltro(transacoesFiltradas)
  }
  return (
    <AuthContext.Provider value={{transacoes, criarTransacoes, filtro, filtrarTransacoes, deleteTransacoes}}>
      {children}
    </AuthContext.Provider>
  )
}

export default UseProvider