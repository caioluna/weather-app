import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: 0 auto 20px;

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

    color: #fff;

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
      opacity: 0.3;
      position: absolute;
      z-index: -1;

      width: 125px;

      top: -50px;
      left: -70px;
    }

    p {
      font-size: 90px;
      text-shadow: -20px 20px 25px rgba(0, 0, 0, 0.15);
      color: #fff;

      span {
        font-size: 70px;
      }
    }
  }

  h2 {
    max-width: 150px;
  }
`;
