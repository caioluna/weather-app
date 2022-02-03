import styled from 'styled-components';

export const Container = styled.header`
  max-width: 500px;
  margin: 50px auto 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

export const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100px;

  background-color: #2b4976;

  img {
    width: 70px;
    margin-right: 30px;
  }

  h1 {
    font-weight: 900;
    color: #fff;
  }
`;
