import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px 15px 15px;

  background-color: rgba(255, 255, 255, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.5);

  h3 {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    padding: 6px 0;

    width: 100%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    color: #2b4976;
  }

  .minMaxArea {
    gap: 15px;
    width: 100%;
    margin-top: 10px;

    display: flex;
    justify-content: space-between;

    text-align: center;
  }
`;

export const MinMax = styled.div`
  width: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  font-weight: 900;

  p {
    font-weight: 400;
    border-radius: 3px 3px 0 0;
    padding: 3px;

    background-color: #2b4976;
    color: #fff;
    margin-bottom: 5px;
  }
`;
