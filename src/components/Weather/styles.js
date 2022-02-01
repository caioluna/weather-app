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
    position: absolute;
    display: inline-block;

    bottom: 0;
    right: 0;

    font-size: 91px;
    line-height: 61px;
    font-weight: 400;

    span {
      font-size: 70px;
    }
  }

  h2 {
    font-size: 46px;
    color: #444e72;
    font-weight: 900;
  }

  h3 {
    font-size: 24px;
  }
`;
