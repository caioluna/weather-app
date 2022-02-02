import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  position: relative;

  h1 {
    max-width: 300px;

    color: #444e72;
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

  h2 {
    max-width: 150px;
  }

  p {
    font-size: 90px;

    span {
      font-size: 70px;
    }
  }
`;
