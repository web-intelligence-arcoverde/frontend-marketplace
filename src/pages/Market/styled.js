import styled from 'styled-components';

export const ContainerMarket = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: space-around;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
