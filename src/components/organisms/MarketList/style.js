import COLORS from 'src/common/colors';
import styled from 'styled-components';

export const Container = styled.div`
  background-attachment: fixed;
  background: transparent;

  width: 100%;

  position: absolute;
  bottom: 50px;
  h4 {
    color: ${COLORS.PRIMARY_ORANGE};
  }
  .market-list {
    white-space: nowrap;
    overflow-x: auto;
    width: 100%;
    height: 245px;
    padding: 0px !important;
    margin: 0px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
