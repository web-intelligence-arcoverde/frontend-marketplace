/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './style.css';

import { useDispatch , useSelector } from 'react-redux';
import {toogleCartProduct} from '../../../store/modules/shop/actions'

function card({ product }) {

  const dispatch = useDispatch();
  const { cart } = useSelector( (state) => state.shop);
  const added = cart.findIndex((p) => p._id === product.id) !== -1

  return( 
  <div  className='product col-3'>
    <img src={product.capa} alt='product' className='img-fluid ration-img'/>
    <button 
    onClick={()=> 
    dispatch(toogleCartProduct(product))} 
    type='button' 
    className='btn' 
    >
      {added ? '-' : '+'}
    </button>
    <h4>
      <label className='badge-primary'>R$ {product.preco.toFixed(2)}</label>
    </h4>
    <small>
      <b>{product.nome}</b>
    </small>
  </div>
  );
}

export default card;