import styled from 'styled-components';
import COLORS from 'src/common/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.SALMON};
  color: #8b8b8b;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
export const ColumnLeft = styled.div`
  color: ${COLORS.WHITE};
  width: 45%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const CardForm = styled.div`
  width: 60%;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 10% 0 0 10%;
  background-color: ${COLORS.WHITE};
  @media (max-width: 769px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const FormSingIn = styled.form`
  width: 70%;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  height: 200px;
  gap: 20px;

  //add style component Input
  Input {
    border-radius: 4px;
    :focus {
      border: 2px solid ${COLORS.PRIMARY_ORANGE}d;
    }
  }
  //add style component Button
  Button {
    background-color: ${COLORS.PRIMARY_ORANGE};
    color: ${COLORS.WHITE};
    border-radius: 4px;
  }
`;
export const LogoResponsive = styled.img`
  display: none;

  @media (max-width: 769px) {
    display: block;
    margin-bottom: 20px;
  }
`;
