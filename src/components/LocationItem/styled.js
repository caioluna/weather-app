import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 253px;
  height: 253px;

  background: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
  color: #fff;

  h1 {
    position: relative;
    font-size: 60px;
    font-weight: 400;

    text-shadow: -8px 13px 20px rgba(0, 0, 0, 0.3);

    span {
      position: absolute;
      top: 10px;
      right: 25px;
      font-size: 45px;
      margin-left: 5px;
    }
  }
`;

export const Content = styled.div`
  text-align: center;

  p {
    font-size: 24px;
    font-weight: 700;
  }

  h3 {
    margin: 0px auto 20px;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const Data = styled.div`
  display: flex;
  justify-content: center;

  table {
    tr {
      display: grid;
      grid-template-columns: 1fr 20px 1fr;
      justify-items: start;
      align-items: center;

      td {
        padding: 5px;
      }

      .separator {
        font-size: 10px;
      }
    }
  }
`;
