import styled from 'styled-components';
import COLORS from 'src/common/colors';

export const Register = styled.form`
  display: flex;
  flex-direction: column;
  width: 35%;
  justify-content: center;
  background-color: ${COLORS.WHITE};
  border-radius: 5%;
  box-shadow: 0px 10px 13px -7px #000000, 7px 7px 10px 11px rgba(0, 0, 0, 0.13);
  h1 {
    display: flex;
    align-self: center;
    padding-top: 20px;
    color: ${COLORS.SALMON};
  }
  form {
    padding: 50px;
    Button {
      margin-top: 40px;
      font-weight: 700;
      :hover {
        background: ${COLORS.SALMON};
      }
    }
    Input {
      border: solid 1px ${COLORS.GRAY};
      margin: 5px 0;
    }
  }
  @media (max-width: 769px) {
    width: 90%;
  }
`;

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
  }
`;
