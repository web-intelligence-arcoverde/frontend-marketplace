import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerButton = styled.button`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 770px;
  right: 10px;

  background: #fff;
  color: #666666;
  border: none;

  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  width: 40px;

  @media (max-width: 769px) {
    top: 690px;
  }
`;

export const TopContainerButton = styled.button`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 266px;
  right: 10px;

  background: #fff;
  color: #666666;
  border: none;

  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
  border-radius: 4px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);

  @media (max-width: 769px) {
    top: 254px;
  }
`;
