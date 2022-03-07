import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(45deg, #0e4f6f 20%, #62a1c7 60%, #7bc7dd 100%);
    -webkit-font-smoothing: antialiased;

    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;

    cursor: default;
  }

  body, input, textarea, button {
    font-family: 'Overpass', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  .zones {
    width: 530px;
    padding: 30px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
