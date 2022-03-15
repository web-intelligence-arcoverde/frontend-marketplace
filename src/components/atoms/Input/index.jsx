import React from 'react';
import { CardInput } from './styles';

const Input = ({ name, type, onChange, placeholder, img }) => {
  return (
    <CardInput>
      <img src={img} alt="" />
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </CardInput>
  );
};

export default Input;
