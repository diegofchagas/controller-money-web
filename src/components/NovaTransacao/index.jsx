import React, { useContext, useState } from "react";
import { AuthContext } from "../UseContext/AuthContext";
import arrowUp from "../../assets/arrow-up-circle.svg";
import arrowDown from "../../assets/arrow-down-circle.svg";
import Button from "../Button";
import Input from "../Input";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { Container, ContainerTransacao, TransacaoButton } from "./styles";

Modal.setAppElement("#root");

const NovaTransacao = ({ children, nome, modalOn, modalOff }) => {
  const [descricao, setDescricao] = useState("");
  const [quantia, setQuantia] = useState("");
  const [categoria, setCategoria] = useState("");
  const [eSaida, setEsaida] = useState(false);

  const { criarTransacoes } = useContext(AuthContext);

  const geradorID = () => Math.round(Math.random() * 1000);

  function cadastrarTransacao(e) {
    e.preventDefault();
    if (!descricao || !quantia) {
      alert("Informe a descrição e o valor!");
    } else if (descricao) {
      criarTransacoes({
        id: geradorID(),
        descricao,
        quantia,
        categoria,
        despesa: eSaida,
      });

      setDescricao("");
      setQuantia("");
      setCategoria("");

      modalOff();
    }
  }

  function handleTransacoE(e) {
    e.preventDefault();
    setEsaida(false);
  }

  function handleTransacoS(e) {
    e.preventDefault();
    setEsaida(true);
  }

  return (
    <Modal
      isOpen={modalOn}
      onRequestClose={modalOff}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <Container>
        {children}

        <ContainerTransacao>
          <h3>Nova transação</h3>

          <Button
            className="fechar"
            onClick={modalOff}
            nome={nome}
            img={<AiOutlineClose size={24} />}
          />

          <form>
            <Input
              className="input"
              placeholder="Descrição"
              value={descricao}
              onChange={({ target }) => setDescricao(target.value)}
            />

            <Input
              className="input"
              type="number"
              placeholder="Preço"
              value={quantia}
              onChange={({ target }) => setQuantia(Number(target.value))}
            />

            <Input
              className="input"
              placeholder="Categoria"
              value={categoria}
              onChange={({ target }) => setCategoria(target.value)}
            />

            <div className="transacoes">
              <TransacaoButton cor="#015F43" onClick={handleTransacoE}>
                {" "}
                <img src={arrowUp} alt="seta para cima" /> Entradas
              </TransacaoButton>
              <TransacaoButton cor="#AA2834" onClick={handleTransacoS}>
                {" "}
                <img src={arrowDown} alt=" seta para baixo" /> Saidas
              </TransacaoButton>
            </div>

            <Button
              className="cadastrar"
              nome="Cadastrar"
              onClick={cadastrarTransacao}
            />
          </form>
        </ContainerTransacao>
      </Container>
    </Modal>
  );
};

export default NovaTransacao;
