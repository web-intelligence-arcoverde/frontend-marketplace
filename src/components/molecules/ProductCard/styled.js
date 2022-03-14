import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  width: 20%;
  border: 1px solid #dcdcdc;
  border-radius: 18px;
  margin: 10px 5px;
  width: 200px;
  height: 340px;
  img {
    height: 180px;
    width: 100%;
  }
  button {
    border-radius: 18px;
    padding: 5px 17px;
    font-size: 25px;
    background: #fa643d;
    color: #fff;
    outline: none;
    border: none;
  }
  .badgel {
    font-family: Roboto;
    color: #000;
    border-radius: 4px;
  }
  .product .ration-img {
    width: 70%;
    height: 100%;
    padding: 10px;
  }
  .product small {
    line-height: 15px;
    display: block;
  }
  p {
    color: #aeaeaf;
    font-size: 14px;
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
