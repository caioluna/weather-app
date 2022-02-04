import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  max-width: 100vw;
  margin: 20px auto 30px;

  @media (max-width: 530px) {
    padding: 0 20px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 30px;
`;

export const LogoArea = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100px;

  background-color: #2b4976;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);

  img {
    width: 70px;
    margin-right: 30px;
  }

  h1 {
    font-weight: 900;
    color: #fff;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  margin-top: 20px;

  color: #fff;
  background-color: #2b4976;

  a {
    color: #fff;
    text-decoration: none;
  }
`;
