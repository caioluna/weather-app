import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  position: relative;

  h1 {
    max-width: 300px;

    color: #2b4976;
    font-weight: 900;
    line-height: 30px;
  }

  span {
    max-width: 300px;
  }
`;

export const Temperature = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;

  div {
    position: relative;

    img {
      position: absolute;
      z-index: -1;

      width: 70px;

      top: -25px;
      left: -50px;
    }

    p {
      font-size: 90px;
      font-weight: 900;
      color: #2b4976;

      span {
        font-size: 70px;
      }
    }
  }

  h2 {
    max-width: 150px;
  }
`;
