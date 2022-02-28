/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Ration from '../../../assets/images/prime.png'
import './style.css';

function card() {
  return( 
  <div  className='product col-3'>
    <img src={Ration} alt='product' className='img-fluid ration-img'/>
    <button type='button' className='btn' >+</button>
    <h4>
      <label className='badge-primary'>R$ 90,00</label>
    </h4>
    <small>
      <b> Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15 Kg</b>
    </small>
  </div>
  );
}

export default card;