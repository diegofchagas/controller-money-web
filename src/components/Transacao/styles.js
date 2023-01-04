import styled from 'styled-components';

export const Informacoes = styled.div`
    ul {
    display: flex;
    list-style: none;
  }

  ul li {
    flex: 1;
    display: flex;
    justify-content: space-between;
    background: #29292e;
    padding: 20px;
    margin-bottom: 10px;
    font-size: 1rem;
   

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      padding-left: 50px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  .verde{
    color: #00B37E;
    
  }

  .red{
    color: #F75A68;
  }
`;
