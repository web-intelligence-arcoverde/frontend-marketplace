import React from 'react';
import { CardButton } from './styles';

const Button =({title,onClick,img})=> {
  return (
    <CardButton>
      <button type='button' 
      onClick={onClick}>
        <img src={img} alt="" />
        {title}
      </button>
    </CardButton>
  )
}

export default Button;