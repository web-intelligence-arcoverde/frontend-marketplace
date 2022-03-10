import styled from 'styled-components';

export const ContainerMap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100% - 94px);
`;

export const AddCoordinate = styled.button`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 800px;
  right: 25px;

  background: #fff;
  color: #666666;
  border: none;

  :hover {
    color: #000;
  }
`;
