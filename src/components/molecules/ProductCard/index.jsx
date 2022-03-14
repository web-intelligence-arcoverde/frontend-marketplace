/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// import './style.css';

import { useDispatch , useSelector } from 'react-redux';
import {toogleCartProduct} from '../../../store/modules/shop/actions'
import {Product ,PriceAndButton } from './styled'

function card({ product }) {
  
  const dispatch = useDispatch();
  const { cart } = useSelector( (state) => state.shop);
  const added = cart.findIndex((p) => p._id === product.id) !== -1

  return( 
  <Product>
    <img src={product.capa} alt='product'/>
    <small>
      <b>{product.nome}</b>
    </small>
    <p>7pcs,priceg</p>
    <PriceAndButton>
      <h5> R$ {product.preco.toFixed(2)}</h5>
      <button 
        onClick={()=> 
        dispatch(toogleCartProduct(product))} 
        type='button' 
        >
        {added ? '-' : '+'}
      </button>
    </PriceAndButton>
  </Product>
  );
}

export default card;