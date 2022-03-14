import React from 'react';
import { CardInput } from './styles';


const Input = ({ type, onChange, placeholder,img})=> {
  return (
    <CardInput>
      <img src={img} alt="" />
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </CardInput>
  );
}

export default Input;