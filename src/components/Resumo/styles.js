import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
  

  @media(max-width: 750px){
    overflow-x:auto;
    padding: 0 1.5rem 1rem 1rem;
    gap:1.5rem;
  }
`;
