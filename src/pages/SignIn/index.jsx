import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { signInRequest } from 'src/store/modules/auth/actions';

import { Icons } from 'src/assets/';
import AuthenticationFace from 'src/components/atoms/AuthenticationFacebook';
import AuthenticationGoogle from 'src/components/atoms/AuthenticationGoogle';
import Button from 'src/components/atoms/Button';
import Input from 'src/components/atoms/Input';

import {
  CardForm,
  ColumnLeft,
  Container,
  FormSingIn,
  LogoResponsive,
} from './styles';

const ShoppingIcon = Icons.shopping;

function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const changeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(signInRequest(form));
    setForm({ username: '', password: '' });
  };

  return (
    <Container>
      <ColumnLeft>
        <img src={ShoppingIcon} alt="logo" />
      </ColumnLeft>
      <CardForm>
        <LogoResponsive src={ShoppingIcon} alt="logo" />
        <h2>Entrar</h2>
        <FormSingIn onSubmit={submitForm}>
          <Input
            name="username"
            type="email"
            placeholder="E-mail"
            onChange={changeForm}
            value={form.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            onChange={changeForm}
            value={form.password}
          />
          <Button title="Entrar" />

          <h6>Ou</h6>

          <Button title="Cadastra-se" onClick={() => navigate('/signup')} />

          <AuthenticationFace />
          <AuthenticationGoogle />
        </FormSingIn>
      </CardForm>
    </Container>
  );
}

export default SignIn;
