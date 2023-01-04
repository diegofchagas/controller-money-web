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

  .header img{
    max-width: 100%;
    display: block;
  }

  .btn {
    background: #00875f;
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
      background-color: #00b37e;
      transition: background-color 0.3s;
    }
  }

  .bi {
    width: 24px;
  }


`;