import styled from 'styled-components';
import COLORS from 'src/common/colors';

export const Container = styled.div`
  height: 100vh;
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h5 {
    height: 30px;
    margin-bottom: 0;
  }
  button {
    width: 100%;
    height: 100px;
    background: ${COLORS.PRIMARY_ORANGE};
  }
`;
export const ContainerRow = styled.div`
  display: flex;
  height: calc(100% - 190px);
  overflow: auto;
  align-content: flex-start;
`;
export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  background: #f5f5f5;
  align-items: flex-end;
`;
export const Price = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  b {
    display: inline-block;
  }
  h3 {
    display: inline-block;
  }
`;
