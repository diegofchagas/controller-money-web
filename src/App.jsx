import React , {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Resumo from './components/Resumo';
import BuscarTransacoes from './components/BuscarTransacoes';
import NovaTransacao from './components/NovaTransacao';
import ContainerTransacoes from './components/ContainerTransacoes';
import { AuthContext } from './components/UseContext/AuthContext';
import { useContext } from 'react';



function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [renda, setRenda] = useState(0)
  const [despesas, setDespesa] = useState(0)
  const [total, setTotal] = useState([])

function abrirModal() {
  setModalOpen(true);
}

function fecharModal() {
  setModalOpen(false);
}

const { transacoes } = useContext(AuthContext);
console.log(transacoes)

useEffect(() => {
  const montanteGanho = transacoes
    .filter((item) => !item.despesa)
    .map((transacao) => Number(transacao.inputValor.quantia));

  const montanteDespesas = transacoes
    .filter((item) => item.despesa)
    .map((transacao) => Number(transacao.inputValor.quantia));

  const entradas = +montanteGanho
    .reduce((acc, valor) => acc + valor, 0)
    .toFixed(2);
  const saidas = +montanteDespesas
    .reduce((acc, valor) => acc + valor, 0)
    .toFixed(2);
  const totalGeral = +Math.abs(entradas + saidas).toFixed(2);

  setRenda(entradas);
  setDespesa(saidas);
  setTotal(totalGeral);
}, [transacoes]);

  return (
    <div>
     <Header onModal={abrirModal} />
      <Resumo
        renda={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(renda)}
        despesa={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(despesas)}
        total={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(total)}
      />
      <BuscarTransacoes />

      <NovaTransacao modalOn={modalOpen} modalOff={fecharModal} />

      <ContainerTransacoes />
    </div>
  )
}

export default App
