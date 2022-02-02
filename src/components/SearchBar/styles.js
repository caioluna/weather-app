import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    display: grid;
    grid-template-columns: 3fr 1fr;
    width: 300px;
    height: 42px;

    background: #fff;
    box-shadow: inset 2px -3px 6px rgba(0, 0, 0, 0.1);

    border-radius: 8px;
    overflow: hidden;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0 20px;

    font-size: 14px;
    outline: none;
    background-color: transparent;
  }

  .search-button {
    /* position: absolute; */
    background-color: #444e72;
    color: #fff;
    padding: 0 10px;
  }
`;
