import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 300px;

  display: flex;
  justify-content: center;

  border-radius: 25px;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  height: 320px;

  #map {
    width: 100%;
    height: 100%;
  }
`;
