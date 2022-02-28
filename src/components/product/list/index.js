/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Ration from '../../../assets/images/Image.png'
import './style.css';

function product() {
  return (
    <div className='product-list col-12'>
      <div className='row'>
        <div className='col-3'>
          <img src={Ration} alt='fds' />
        </div>
        <div className='col-6 '>
          <h6>
            <label className='badge badge-primary'>R$ 30,00</label>
          </h6>
          <small>
            <b>Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15 Kg</b>
          </small>
        </div>
        <div className='col-3'>
          <button type='button'className='btn' >-</button>
        </div>
      </div>
    </div>);
}

export default product;