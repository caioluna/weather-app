import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: #fff;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  position: relative;

  h1 {
    width: 100%;
    min-height: 45px;

    white-space: nowrap;
    overflow-wrap: break-word;
    text-overflow: ellipsis;

    color: #2b4976;
    font-weight: 900;
  }

  span {
    max-width: 300px;
  }
`;

export const Temperature = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;

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
      text-shadow: -20px 20px 25px rgba(0, 0, 0, 0.15);

      span {
        font-size: 70px;
      }
    }
  }

  h2 {
    max-width: 150px;
  }
`;
