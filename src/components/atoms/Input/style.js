import styled from 'styled-components';
import COLORS from 'src/common/colors';

export const CardInput = styled.div`
  width: 100%;
  display: flex;
  input {
    width: 100%;
    height: 48px;
    padding-left: 10px;
    border: 1px solid ${COLORS.GRAY};
    :focus {
      outline: none;
      border: solid 2px ${COLORS.PRIMARY_ORANGE};
    }
  }
`;
