import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    width: 300px;
    height: 42px;

    background: #fff;
    box-shadow: inset 2px -3px 6px rgba(0, 0, 0, 0.1);

    padding: 0 20px;

    /* display: grid;
    grid-template-columns: 30px 1fr;
    gap: 16px; */

    border-radius: 8px;
    overflow: hidden;
  }

  input {
    width: 100%;
    height: 100%;
    font-size: 16px;
    outline: none;
  }
`;
