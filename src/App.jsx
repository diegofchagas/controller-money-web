import React , {useEffect, useState, useContext} from 'react';
import './App.css';
import Header from './components/Header';
import Resumo from './components/Resumo';
import { format } from "date-fns";
import BuscarTransacoes from './components/BuscarTransacoes';
import NovaTransacao from './components/NovaTransacao';
import ContainerTransacoes from './components/ContainerTransacoes';
import { AuthContext } from './components/UseContext/AuthContext';




function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [renda, setRenda] = useState(0)
  const [despesas, setDespesa] = useState(0)
  const [total, setTotal] = useState([])
  const [larguraTela, setLarguraTela] = useState(window.innerWidth)

  let newDate = new Date();

function abrirModal() {
  setModalOpen(true);
}

function fecharModal() {
  setModalOpen(false);
}

const { transacoes } = useContext(AuthContext);
console.log(transacoes)

useEffect(()=>{
  localStorage.setItem('transactions', JSON.stringify(transacoes));
},[transacoes])


useEffect(() => {
  const atualizarLarguraTela = () => {
    setLarguraTela(window.innerWidth);
  };

  window.addEventListener("resize", atualizarLarguraTela);

  return () => {
    window.removeEventListener("resize", atualizarLarguraTela);
  };
}, []);

const dataRenda = larguraTela <= 375 ? 
`Última entrada em ${renda ? format(newDate, "dd/MM/yyyy") : ''}` : '';
const dataDespesa = larguraTela <= 375 ? `Última despesa em ${despesas ? format(newDate, "dd/MM/yyyy") : ''}` : '';
const dataTotal = larguraTela <= 375 ? `Última atualizacao em ${total ? format(newDate, "dd/MM/yyyy") : ''}` : '';


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
        dataRenda={dataRenda}
        dataDespesa={dataDespesa}
        dataTotal={dataTotal}
      />
      <BuscarTransacoes />

      <NovaTransacao modalOn={modalOpen} modalOff={fecharModal} />

      <ContainerTransacoes />
    </div>
  )
}

export default App
