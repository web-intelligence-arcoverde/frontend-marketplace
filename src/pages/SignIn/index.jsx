// eslint-disable-next-line no-unused-vars

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCostumer as setStoreCostumer } from '../../store/modules/shop/actions';
import {
  CardForm,
  ColumnLeft,
  Container,
  FormSingIn,
  LogoVisble,
} from './styles';
import Shoping from '../../assets/svg/shoping.svg';
import AuthenticationFace from '../../components/atoms/AuthenticationFace';
import AuthenticationGoogle from '../../components/atoms/AuthenticationGoogle';

function SignIn() {
  const dispatch = useDispatch();
  const [costumer, setCostumer] = useState({
    email: '',
    password: '',
  });
  const goToCheckout = () => {
    dispatch(setStoreCostumer(costumer));
  };
  return (
    <Container>
      <ColumnLeft>
        <img src={Shoping} alt="logo" />
      </ColumnLeft>
      <CardForm>
        <LogoVisble src={Shoping} alt="logo" />
        <h3>Fazer Login</h3>
        <FormSingIn>
          <input
            type="email"
            required
            placeholder="E-mail"
            onChange={(e) => {
              setCostumer({ ...costumer, email: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setCostumer({
                ...costumer,
                password: e.target.value,
              });
            }}
          />
          <button
            type="button"
            onClick={() => {
              goToCheckout();
            }}
          >
            Entrar
          </button>
        </FormSingIn>
        <h6>Ou</h6>
        <AuthenticationFace />
        <AuthenticationGoogle />
      </CardForm>
    </Container>
  );
}

export default SignIn;
