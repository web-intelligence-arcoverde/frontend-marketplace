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
  @media (max-width: 769px) {
    flex-direction: column-reverse;
    padding: 10px 20px;
    align-self: center;
    margin-top: 10px;
    img {
      width: 250px;
    }
    Button {
      width: 290px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: none;
      }
    }
  }
`;

export const Descripton = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 100px 0;
  p {
    width: 60%;
    margin: 30px 0;
    text-align: center;
    align-self: center;
    color: #858282;
  }
  @media (max-width: 769px) {
    width: 90%;
    margin: 0;
    p {
      width: 90%;
    }
  }
`;

export const CardSearch = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  align-self: center;
  align-items: center;
  margin-left: 35%;
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
    border-radius: 4px;
  }
  > :last-child {
    position: relative;
    right: 21%;
    @media (max-width: 769px) {
      right: 0;
    }
  }
  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    gap: 5px;
    height: auto;
    input {
      padding: 20px;
      font-size: 20px;
    }
    Button {
      width: 100%;
    }
  }
`;
