import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;

  .contain {
    display: flex;
  }
`;

export const ContainerRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .centralizando {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
