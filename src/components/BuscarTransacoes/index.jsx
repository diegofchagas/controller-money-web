import React, { useContext, useState, useEffect } from "react";
import Button from "../Button";
import Input from "../Input";
import { AuthContext } from "../UseContext/AuthContext";
import { Container, Form } from "./styles";

const BuscarTransacoes = () => {
  const [busca, setBusca] = useState("");
  const [larguraTela, setLarguraTela] = useState(window.innerWidth)

  const { transacoes, filtrarTransacoes } = useContext(AuthContext);

  useEffect(() => {
    const atualizarLarguraTela = () => {
      setLarguraTela(window.innerWidth);
    };
  
    window.addEventListener("resize", atualizarLarguraTela);
  
    return () => {
      window.removeEventListener("resize", atualizarLarguraTela);
    };
  }, []);
  

  function filtroTransacoes(e) {
    e.preventDefault();
    const filtroT = transacoes.filter(
      ({ descricao }) => descricao.toLowCase() === busca.toLowerCase()
    );
    filtrarTransacoes(filtroT);
  }

  return (
    <Container>
      <Form>
        <Input
          type="search"
          placeholder="Busque uma transação"
          value={busca}
          onChange={({ target }) => setBusca(target.value)}
        />
        { larguraTela <= 340 ? (
        <Button
          onClick={filtroTransacoes}
          img={<i className="bi bi-search"></i>}
        />
        ):(
        <Button
        onClick={filtroTransacoes}
        img={<i className="bi bi-search"></i>}
        nome="Buscar"
      />
          )}
      </Form>
    </Container>
  );
};

export default BuscarTransacoes;
