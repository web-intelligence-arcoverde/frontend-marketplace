/* eslint-disable arrow-body-style */
import React , { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Dock } from 'react-dock';
import Product from '../product/list';
import './style.css';


function sidebar() {
  const history = useHistory();
  const { cart } = useSelector((state) => state.shop);
  const total =  cart.reduce((max , product) => {return max + product.preco;},0);
  const  [opened, setOpened ]= useState(false);

  useEffect(()=>{
    window.addEventListener('openCart', () => {
      setOpened(true);
    });
  },[]);


  return (
  <Dock
  position='right' 
  isVisible={opened}
  onVisibleChange={(visible)=>{setOpened(visible);}}
  >
    <div className='container h-100 pt-4 sidebar'> 
      <h5>Minha sacola ({cart.length})</h5>
      <div className='row products'>
         {cart.map((p) => (
        <Product Product={p} />
        ))} 
      </div>
      <div className='row footer align-items-end'>
        <div className='col-12 d-flex justify-content-between align-items-center'>
          <b className='d-inline-block'>Total</b>
          <h3 className='d-inline-block'>R$ {total.toFixed(2)}</h3>
        </div>
        <button onClick={() => history.push('/checkout')} type='button' className='btn btn-block btn-lg btn btn-primary rounded-0 h-50 align-items-center' >Finalizar compra</button>
      </div>
    </div>
  </Dock>
  );
}

export default sidebar;