import React, { useState } from 'react';
import Logo from 'src/assets/icons/shoping-white.svg';
import Input from 'src/components/atoms/Input';
import Button from 'src/components/atoms/Button';
import { Container } from 'src/components/atoms/Container';
import { Info, Register } from './style';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    tel: '',
  });

  const changeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setForm({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      tel: '',
    });
  };

  return (
    <Container
      direction
      justify="space-evenly"
      background="linear-gradient(
      -90deg
      ,#fa643d 0%,#e5a595 100%)"
    >
      <Info>
        <img src={Logo} alt="" />
        <h2>Junte-se a nós</h2>
        <h4>
          Cadastre-se e seja um colaborador e receba todas as nossas ofertas
        </h4>
      </Info>
      <Register>
        <h1>Registre-se</h1>
        <form onSubmit={submitForm}>
          <Input
            type="text"
            name="username"
            placeholder="Nome"
            onChange={changeForm}
            value={form.username}
          />
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={changeForm}
            value={form.email}
          />
          <Input
            type="tel"
            name="tel"
            placeholder="Telefone"
            onChange={changeForm}
            value={form.tel}
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={changeForm}
            value={form.password}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar senha"
            onChange={changeForm}
            value={form.confirmPassword}
          />

          <Button title="Cadastrar" />
        </form>
      </Register>
    </Container>
  );
};

export default SignUp;
