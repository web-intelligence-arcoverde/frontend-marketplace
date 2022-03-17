import styled from 'styled-components';
import COLORS from 'src/common/colors';

export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: center;
  background-color: ${COLORS.WHITE};
  border-radius: 5%;
  box-shadow: 0px 10px 13px -7px #000000, 7px 7px 10px 11px rgba(0, 0, 0, 0.13);

  h1 {
    display: flex;
    align-self: center;
    justify-content: center;
    padding-top: 20px;
    color: ${COLORS.SALMON};
  }
  form {
    padding: 50px;
    Button {
      font-weight: 700;
    }
    Input {
      margin: 6px 0;
    }
  }
  @media (max-width: 769px) {
    margin-top: 30px;
    width: 90%;
  }
`;

export const CardButton = styled.div`
  display: flex;
  width: 80%;
  gap: 20px;
  margin: 20px;
  Button {
    border-radius: 4px;
  }
`;
