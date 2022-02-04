import styled from 'styled-components';

export const Container = styled.form`
  width: 500px;
  margin: 10px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    display: grid;
    grid-template-columns: 3fr 1fr;

    width: 300px;
    height: 42px;
    box-shadow: inset 0px -1px 2px rgba(0, 0, 0, 0.3);
  }

  input {
    background-color: #fff !important;
    width: 100%;
    height: 100%;
    padding: 0 20px;

    font-size: 14px;
    outline: none;
    background-color: transparent;
    border-radius: 3px 0 0 3px;
  }

  .search-button {
    border-radius: 0 3px 3px 0;
    background-color: rgba(9, 13, 58, 1);
    color: #fff;
    padding: 0 10px;
  }
`;
