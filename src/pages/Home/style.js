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
  p {
    width: 60%;
    text-align: center;
    align-self: center;
    color: #858282;
    margin-top: 10px;
  }
  @media (max-width: 769px) {
    width: 90%;
    margin: 0;
    p {
      width: 90%;
    }
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 18px;

  input {
    height: 48px;
    width: 100%;
    padding-left: 15px;
    :focus {
      outline: none;
      border: solid 2px ${COLORS.PRIMARY_ORANGE};
    }
  }
`;

export const Search = styled.div`
  Button {
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
