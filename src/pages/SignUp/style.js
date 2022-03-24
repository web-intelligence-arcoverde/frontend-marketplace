import styled from 'styled-components';
import COLORS from 'src/common/colors';

export const Info = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: ${COLORS.WHITE};
  align-items: center;
  gap: 15px;
  text-align: center;
  h2 {
    font-size: 28px;
  }
  h4 {
    width: 30ch;
    font-size: 22px;
  }
  @media (max-width: 769px) {
    h2,
    h4 {
      display: none;
    }
    img {
      padding-top: 70px;
      width: 100px;
    }
  }
`;
