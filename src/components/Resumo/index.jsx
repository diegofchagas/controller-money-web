import React from "react";
import Card from "../Cards";
import arrowUp from "../../assets/arrow-up-circle.svg";
import arrowDown from "../../assets/arrow-down-circle.svg";
import cifrao from "../../assets/dollar.svg";
import { Container } from "./styles";

const Resumo = ({ renda, despesa, total }) => {
  return (
    <Container>
      <Card value={renda} titulo="Entradas" img={arrowUp} cor="#323238" />
      <Card value={despesa} titulo="Saídas" img={arrowDown} cor="#323238" />
      <Card value={total} titulo="Total" img={cifrao} cor="#015F43" />
    </Container>
  );
};

export default Resumo;
