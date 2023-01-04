import React, { useContext, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { AuthContext } from "../UseContext/AuthContext";
import { Container, Form } from "./styles";

const BuscarTransacoes = () => {
  const [busca, setBusca] = useState("");

  const { transacoes, filtrarTransacoes } = useContext(AuthContext);

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
        <Button
          onClick={filtroTransacoes}
          img={<i className="bi bi-search"></i>}
          nome="Buscar"
        />
      </Form>
    </Container>
  );
};

export default BuscarTransacoes;
