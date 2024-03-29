import React, { useContext, useState, useEffect } from "react";
import lixeira from '../../assets/trash3.svg'
import { AuthContext } from "../UseContext/AuthContext";
import { format } from "date-fns";
import { Informacoes } from "./styles";
import ReactPaginate from "react-paginate";

const Transacao = () => {
  const { transacoes, filtro, deleteTransacoes } = useContext(AuthContext);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(transacoes.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(transacoes.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, transacoes]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % transacoes.length;
    setItemOffset(newOffset);
  };

  let newDate = new Date();

  return (
    <>
      <Informacoes>
        <div>
          {filtro.length > 0
            ? filtro.map((transacao) => (
              <ul key={transacao.id}>
              <li>
                <span className="descricao">{transacao.inputValor.descricao}</span>
                <span className={transacao.despesa ? "red" : "azul"}>
              {transacao.despesa === true && " - "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transacao.inputValor.quantia)}</span>
              <span className="categoria">{transacao.inputValor.categoria}</span>
              <span className="data">{transacao ? format(newDate, "dd/MM/yyyy") : ""}</span>
              <span className="lixeira"><img onClick={() => deleteTransacoes(transacao.id)} className="lixo" src={lixeira} alt="lixeira" /></span>
              </li>
            </ul>
              ))
              :
              currentItems?.map((transacao) => (
                <ul key={transacao.id}>
                  <li>
                    <span className="descricao">{transacao.inputValor.descricao}</span>
                    <span className={transacao.despesa ? "red" : "azul"}>
                  {transacao.despesa === true && " - "}
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transacao.inputValor.quantia)}</span>
                  <span className="categoria">{transacao.inputValor.categoria}</span>
                  <span className="data">{transacao ? format(newDate, "dd/MM/yyyy") : ""}</span>
                  <span className="lixeira"><img onClick={() => deleteTransacoes(transacao.id)} className="lixo" src={lixeira} alt="lixeira" /></span>
                  </li>
                </ul>
              ))} 

        </div>
      </Informacoes>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="paginacao"
        pageLinkClassName="pagina-num"
        previousLinkClassName="anterior"
        nextLinkClassName="proximo"
        activeLinkClassName="active"
      />
    </>
  );
};

export default Transacao;
