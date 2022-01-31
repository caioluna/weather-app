import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 800px;

  @media (max-width: 810px) {
    padding: 0 50px;
    justify-content: center;
  }
`;
