import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const ContainerTransacao = styled.div`
  width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: #202024;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 140%;
    color: #e1e1e6;
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .fechar {
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: #7c7c8a;
  }

  .input {
    background: #121214;
    border-radius: 6px;
    padding: 1rem;
    border: none;
    color: #c4c4cc;
    box-sizing: border-box;
    outline: none;
    border: 0;

    &::placeholder {
      font-size: 0.96rem;
    }

    &:focus {
      border: 1px solid #5F8BC9;
    }
  }

  form .transacoes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .cadastrar {
    height: 58px;
    border: 0;
    background: #3185FC;
    color: #fff;
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background: #3165FC;
    }
  }
  @media(max-width: 750px){
    width:25rem;

    h3{
      font-size:1.25rem;
    }
  }

  @media(max-width: 375px){
    width:23.5rem;
    h3{
      font-size:1rem;
    }

    .cadastrar{
      height: 48px;
      margin-top: 1rem;
      font-size:.875rem;
    }
  }
 

`;

export const TransacaoButton = styled.button`
  background-color: #29292e;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  color: #c4c4cc;
  border: none;
  font-size: 0.96rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #323238;
    transition: background-color 0.3s;
  }

  &:active {
    background: ${({ cor }) => cor};
    color: #ffffff;
  }
`;