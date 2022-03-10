import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ec7a5d;
  color: #8b8b8b;
`;

export const CardForm = styled.div`
  width: 55%;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 10% 0 0 10%;
  background-color: #fff;
  .my-facebook-button-class {
    color: #3d61d6;
    background-color: transparent;
    width: 300px;
    border-radius: 4px;
    border: none;
  }
`;

export const FormSingIn = styled.form`
  width: 50%;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  height: 200px;
  gap: 20px;
  input {
    width: 300px;
    height: 48px;
    padding-left: 10px;
    border: none;
    border-radius: 4px;
    :focus {
      border: 2px solid #fa643d;
    }
  }
  button {
    background-color: #fa643d;
    color: #fff;
    width: 300px;
    height: 48px;
    border-radius: 4px;
    border: none;
  }
`;
export const ColumnLeft = styled.div`
  background-color: #ec7a5d;
  color: #fff;
  width: 40%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Authentication = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: relative;
    left: 50px;
    width: 30px;
  }
`;
