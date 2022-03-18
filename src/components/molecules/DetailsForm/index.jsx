import React, { useState } from 'react';
import Input from 'src/components/atoms/Input';

const DetailsForm = () => {
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
    <div style={{ width: '100%' }}>
      <h1>Registre-se</h1>
      <form onSubmit={submitForm}>
        <Input
          type="text"
          name="username"
          placeholder="Nome"
          onChange={changeForm}
          value={form.username}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={changeForm}
          value={form.email}
          required
        />
        <Input
          type="tel"
          name="tel"
          placeholder="Telefone"
          onChange={changeForm}
          value={form.tel}
          required
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
          required
        />
      </form>
    </div>
  );
};
export default DetailsForm;
