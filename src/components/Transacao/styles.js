import styled from 'styled-components';
import calendario from '../../assets/Icons.svg'
import seta from '../../assets/Seta.svg'

export const Informacoes = styled.div`
    ul {
    display: flex;
    list-style: none;
  }

  ul li {
    flex:1;
    display: flex;
    justify-content: space-between;
    background: #29292e;
    padding: 1.25rem;
    margin-bottom: .625rem;
    font-size: 1rem;
    border-radius:6px;
    padding-inline:3rem;
  }

  .azul{
    color: #2E73D5;
    font-weight:400;
    
  }

  .red{
    color: #F75A68;
    font-weight:400;
  }

  @media (max-width: 450px) {
    ul {
    display: flex;
    list-style: none;
  }

  ul li {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding:.875rem;
  gap: 0.75rem;
  align-self: stretch;
  max-width:20rem;
  
 

  .descricao{
    grid-column: 1/-1;
  }
  .categoria{
    grid-column:1;
    display:flex;
    align-items:center;
    gap:5px;
  }

  .categoria::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(${seta}) no-repeat center;
    background-size:cover;
}


  .data{
    grid-column:2;
    display:flex;
    justify-content:end;
    align-items:center;
    gap:5px;
  }

  .data::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(${calendario}) no-repeat center;
    background-size:cover;
}

.lixeira{
  grid-column:3;
}

.lixeira .lixo{
  cursor: pointer;
}


  .azul,.red{
    grid-column:1;
    font-size:1.25rem;
    font-weight:700;
  }
  }
}
`;
