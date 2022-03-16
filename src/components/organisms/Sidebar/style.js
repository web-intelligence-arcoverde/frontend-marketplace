import styled from 'styled-components';
import COLORS from 'src/common/colors';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background: #e5e5e5;
  flex-direction: column;
  justify-content: space-between;
  h5 {
    color: ${COLORS.PRIMARY_ORANGE};
    margin-bottom: 0;
    text-align: center;
  }
  > :last-child {
    width: 100%;
    height: 70px;
    background: ${COLORS.SALMON};
    border: none;
    color: ${COLORS.WHITE};
    :hover {
      background: ${COLORS.PRIMARY_ORANGE};
    }
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const Price = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  b {
    font-weight: 400;
    color: #393939;
    font-size: 17px;
  }
  h3 {
    font-size: 22px;
    color: #000;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  height: calc(100% - 190px);
  overflow: auto;
  align-content: flex-start;
`;

export const Badge = styled.div`
  display: flex;
  height: 100px;
  padding: 10px;
  padding-right: 15px;
  background: ${COLORS.WHITE};
  justify-content: space-between;
  align-items: center;
  > :last-child {
    font-size: 28px;
  }
  button {
    background: none;
    border: none;
  }
`;
