// eslint-disable-next-line no-unused-vars

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCostumer as setStoreCostumer } from '../../store/modules/shop/actions';
import {
  CardForm,
  ColumnLeft,
  Container,
  FormSingIn,
  LogoResponsive,
} from './styles';
import Shoping from '../../assets/svg/shoping.svg';
import AuthenticationFace from '../../components/atoms/AuthenticationFace';
import AuthenticationGoogle from '../../components/atoms/AuthenticationGoogle';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';

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
        <LogoResponsive src={Shoping} alt="logo" />
        <h2>Entrar</h2>
        <FormSingIn>
          <Input
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setCostumer({
                ...costumer,
                email: e.target.value,
              });
            }}
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setCostumer({
                ...costumer,
                password: e.target.value,
              });
            }}
          />
          <Button title="Entrar" onClick={goToCheckout} />
        </FormSingIn>
        <h6>Ou</h6>
        <AuthenticationFace />
        <AuthenticationGoogle />
      </CardForm>
    </Container>
  );
}

export default SignIn;
