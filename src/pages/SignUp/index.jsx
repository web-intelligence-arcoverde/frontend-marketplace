import React, { useState } from 'react';

import { signUpRequest } from 'src/store/modules/auth/actions';
import { useDispatch } from 'react-redux';

import Input from 'src/components/atoms/Input';
import Button from 'src/components/atoms/Button';

const SignUp = () => {
  const [costumer, setCostumer] = useState({
    name: '',
    type: 'individual',
  });

  const dispatch = useDispatch();

  const signUp = (e) => {
    e.preventDefault();
    dispatch(signUpRequest(costumer));
  };

  return (
    <div className="container-fluid h-100">
      <form onSubmit={signUp}>
        <Input
          type="text"
          placeholder="NOME COMPLETO"
          onChange={(e) => {
            setCostumer({ ...costumer, name: e.target.value });
          }}
        />
        <Input
          type="text"
          className="form-control form-control-lg mb-3"
          placeholder="E-mail"
          onChange={(e) => {
            setCostumer({ ...costumer, email: e.target.value });
          }}
        />
        <Input
          type="text"
          className="form-control form-control-lg mb-3"
          placeholder="Telefone"
          onChange={(e) => {
            setCostumer({ ...costumer, phone_numbers: [e.target.value] });
          }}
        />

        <Button type="submit">Finalizar pedido</Button>
      </form>
    </div>
  );
};

export default SignUp;
