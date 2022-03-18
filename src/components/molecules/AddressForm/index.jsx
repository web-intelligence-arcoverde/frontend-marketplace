import React, { useState } from 'react';
import Input from 'src/components/atoms/Input';

const AddressForm = () => {
  const [form, setForm] = useState({
    endereco: '',
    cep: '',
    rua: '',
    cidade: '',
    bairro: '',
  });

  const changeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setForm({
      endereco: '',
      cep: '',
      rua: '',
      cidade: '',
      bairro: '',
    });
  };
  return (
    <div style={{ width: '100%' }}>
      <h1>Endereço</h1>
      <form onSubmit={submitForm}>
        <Input
          type="text"
          name="endereco"
          placeholder="Endereço"
          onChange={changeForm}
          value={form.endereco}
          required
        />
        <Input
          type="cep"
          name="cep"
          placeholder="Cep"
          onChange={changeForm}
          value={form.cep}
          required
        />
        <Input
          type="text"
          name="rua"
          placeholder="Rua"
          onChange={changeForm}
          value={form.rua}
          required
        />
        <Input
          type="text"
          name="cidade"
          placeholder="Cidade"
          onChange={changeForm}
          value={form.cidade}
        />
        <Input
          type="text"
          name="bairro"
          placeholder="Bairro"
          onChange={changeForm}
          value={form.bairro}
          required
        />
      </form>
    </div>
  );
};
export default AddressForm;
