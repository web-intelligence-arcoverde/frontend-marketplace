// eslint-disable-next-line no-unused-vars

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCostumer as setStoreCostumer } from '../../store/modules/shop/actions';
import { Container, FormSingIn } from './styles';

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
      <FormSingIn>
        <input
          type="email"
          required
          className="form-control form-control-lg mb-3"
          placeholder="E-mail"
          onChange={(e) => {
            setCostumer({ ...costumer, email: e.target.value });
          }}
        />

        <input
          type="password"
          className="form-control form-control-lg mb-3"
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
    </Container>
  );
}

export default SignIn;
