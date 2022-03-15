// eslint-disable-next-line no-unused-vars
import { signInRequest } from 'src/store/modules/auth/actions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
    console.log(form);
    dispatch(signInRequest(form));
    setForm({ username: '', password: '' });
  };

  return (
    <Container>
      <ColumnLeft>
        <img src={Shoping} alt="logo" />
      </ColumnLeft>
      <CardForm>
        <LogoResponsive src={Shoping} alt="logo" />
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
        </FormSingIn>
        <h6>Ou</h6>
        <AuthenticationFace />
        <AuthenticationGoogle />
      </CardForm>
    </Container>
  );
}

export default SignIn;
