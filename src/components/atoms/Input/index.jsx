import React from 'react';
import { CardInput } from './styles';

const Input = ({ name, type, onChange, placeholder, img, required }) => {
  return (
    <CardInput>
      <img src={img} alt="" />
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </CardInput>
  );
};

export default Input;
