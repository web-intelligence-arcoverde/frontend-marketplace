import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ec7a5d;
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
