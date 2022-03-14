import styled from 'styled-components';
import COLORS from 'src/common/colors/';

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
  Button {
    width: 150px;
    background-color: ${COLORS.PRIMARY_ORANGE};
    color: ${COLORS.WHITE};
    border-radius: 4px;
  }
`;

export const Descripton = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 50px 0;
  p {
    width: 60%;
    margin: 30px 0;
    text-align: center;
    align-self: center;
    color: #858282;
  }
`;

export const CardSearch = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  align-self: center;
  align-items: center;
  margin-left: 38%;

  input {
    height: 48px;
    width: 100%;
    padding-left: 15px;
    :focus {
      outline: none;
      border: solid 2px ${COLORS.PRIMARY_ORANGE};
    }
  }
  Button {
    width: 35%;
    background-color: ${COLORS.PRIMARY_ORANGE};
    color: ${COLORS.WHITE};
  }
  > :last-child {
    position: relative;
    right: 21%;
  }
`;
