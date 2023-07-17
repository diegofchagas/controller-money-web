import React from "react";
import Card from "../Cards";
import arrowUp from "../../assets/arrow-up-circle.svg";
import arrowDown from "../../assets/arrow-down-circle.svg";
import cifrao from "../../assets/dollar.svg";
import { Container } from "./styles";

const Resumo = ({ renda, despesa, total,dataRenda,dataDespesa,dataTotal }) => {

  return (
    <Container>
      <Card value={renda} titulo="Entradas" img={arrowUp} cor="#323238" data={dataRenda}/>
      <Card value={despesa} titulo="Saídas" img={arrowDown} cor="#323238" data ={dataDespesa} />
      {/* <Card value={total} titulo="Total" img={cifrao} cor="#015F43" /> */}
      <Card className={total ? 'total' : ''} value={total} titulo="Total" img={cifrao} cor="#3185FC" data={dataTotal} />
    </Container>
  );
};

export default Resumo;
