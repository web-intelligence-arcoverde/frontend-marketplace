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
    border-radius: 4px;
  }
  @media (max-width: 769px) {
    justify-content: center;
    img {
      width: 150px;
    }
  }
`;
export const LoginMobile = styled.div`
  display: none;
  @media (max-width: 769px) {
    display: block;
    position: absolute;
    left: 70%;
    top: 3%;
    img {
      width: 40px;
    }
  }
`;
export const LoginDesktop = styled.div`
  @media (max-width: 769px) {
    display: none;
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
export const CardButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 12px;
  @media (max-width: 769px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
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
  @media (max-width: 769px) {
    width: 90%;
  }
`;

export const Search = styled.div`
  Button {
    background-color: ${COLORS.PRIMARY_ORANGE};
    color: ${COLORS.WHITE};
    border-radius: 4px;
  }

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    gap: 5px;
    height: auto;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  height: 60%;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 769px) {
    input {
      padding-left: 50px;
    }
  }
`;
