import styled from 'styled-components';
import COLORS from 'src/common/colors';

export const Register = styled.form`
  width: 35%;
  background-color: ${COLORS.WHITE};
  border-radius: 4px;
  box-shadow: 0px 10px 13px -7px #000000, 7px 7px 10px 11px rgba(0, 0, 0, 0.13);

  form {
    padding: 50px;
    Button {
      margin-top: 40px;
    }
  }
`;
