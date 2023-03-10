import styled from 'styled-components';

export const Container = styled.div`
  background: #121214;
  padding: 2.5rem 0 7.5rem;

  .header {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1{
    font-size: 2.5rem
  }

  .btn {
    //background: #00875f;
    background-color:#3185FC;
    border-radius: 6px;
    border: none;
    padding: 12px 20px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 160%;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      background-color: #3165FC;
      transition: background-color 0.3s;
    }
  }

  .bi {
    width: 24px;
  }


`;
