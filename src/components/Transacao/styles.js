import styled from 'styled-components';

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
    
  }

  .red{
    color: #F75A68;
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

  .descricao{
    grid-column: 1/-1;
  }
  .categoria{
    grid-column:1;
  }
  .data{
    grid-column:2;
  }

  .azul .red{
    grid-column:1;
  }
  }
  
  }
`;
