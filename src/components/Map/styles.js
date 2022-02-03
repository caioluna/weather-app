import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  max-width: 100%;

  display: flex;
  justify-content: center;

  overflow-x: hidden;
`;

export const Content = styled.div`
  width: 100%;
  height: 320px;

  #map {
    width: 100%;
    max-width: 100%;
    height: 100%;
  }
`;
