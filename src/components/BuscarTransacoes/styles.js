import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
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
    border-radius: 4px;
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
`;
