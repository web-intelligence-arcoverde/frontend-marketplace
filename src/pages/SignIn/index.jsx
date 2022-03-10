// eslint-disable-next-line no-unused-vars

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCostumer as setStoreCostumer } from '../../store/modules/shop/actions';
import { CardForm, ColumnLeft, Container, FormSingIn } from './styles';
import Shoping from '../../assets/svg/shoping.svg';

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
        <img src={Shoping} alt="img" />
      </ColumnLeft>
      <CardForm>
        <h3>Faça seu Login</h3>
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
        <h5>Ou</h5>
        <button type="submit">Entrar com o facebook</button>
      </CardForm>
    </Container>
  );
}

export default SignIn;
