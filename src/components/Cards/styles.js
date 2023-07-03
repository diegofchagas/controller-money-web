import styled from 'styled-components';

export const Card = styled.div`
  background: ${({cor}) => cor};
  padding: 2rem;
  border-radius: 6px;
 min-width:220px;
  

  img {
    width: 26px;
    height: 26px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titulo {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: #c4c4cc;
  }
  .valor {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 32px;
    line-height: 140%;
    color: #e1e1e6;
  }
  
  @media (max-width: 950px) {
  padding: 1.5rem;
    p {
      font-size: 1rem;
    }

    .valor {
      font-size: 1.25rem;
    }
  }
`;
