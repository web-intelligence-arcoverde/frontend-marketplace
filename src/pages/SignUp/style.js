import styled from 'styled-components';
import COLORS from 'src/common/colors';

export const Info = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  color: ${COLORS.WHITE};
  align-items: center;
  gap: 15px;
  text-align: center;
  @media (max-width: 769px) {
    h2,
    h4 {
      display: none;
    }
    img {
      width: 100px;
    }
  }
`;
