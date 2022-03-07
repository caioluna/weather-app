import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 10px 20px;
  gap: 30px;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.5);

  cursor: default;

  h3 {
    display: grid;
    place-items: center;
    justify-items: start;

    text-align: center;
    color: #2b4976;
    color: #fff;
  }

  .image {
    display: grid;
    place-items: center;
    img {
      display: flex;
    }
  }
`;

export const MinMax = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    span {
      color: #fff;
      font-size: 30px;
      display: flex;

      span {
        font-size: 18px;
      }
    }

    p {
      padding: 3px;
      color: #062433;
    }
  }
`;
