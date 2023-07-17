import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  .qtd-transacao{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:.938rem;

    h3{
      font-size:1.125rem;
      font-weight:400;
      color: #c4c4cc;
    }

    span{
      font-size:1rem;
      font-weight:400;
      color:#7C7C8A;
    }
  }

  @media (max-width: 375px) {
    margin: 1rem auto 0;
}
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    background: #121214;
    border-radius: 6px;
    color: #c4c4cc;
    outline: none;
    border: none;

    &::placeholder {
      color: #7c7c8a;
      font-size: 1rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 8px;
    background: transparent;
    border-radius: 6px;
    color: #5F8BC9;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #5F8BC9;

    &:hover {
      background: #5F8BC9;;
      border: 1px solid #4490FC;
      border-radius: 6px;
      color: #E9FAE3;
      transition: background-color 0.4s;
    }
  }

button .bi.bi-search{
  order:-1;
}

@media (max-width: 375px) {

  button{
    width: 3.375rem;
    height:3.375rem;
    padding: 1rem;
    font-size: 1rem;
    margin-left:-10px;
  }
  button .bi.bi-search{
  font-size:1.375rem;
}
}
`;
