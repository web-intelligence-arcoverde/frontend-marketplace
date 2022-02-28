/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Header from '../../components/header';
import Card from '../../components/product/card';
import PetLoveLogo from '../../assets/images/petlovelogo.png'
import './style.css';

function petshop() {
  return(
    <div className='h-100' >
    <Header/>
    <div className='container '>
      <div className='row'> 
        <div className='col-2'>
          <img src={PetLoveLogo} alt='petlovelogo'/>
          <b>Petlove</b>
          <div className='petshop-infos'> 

          <span className="mdi mdi-star"/>
            <text>
              <b>2,8</b>
            </text>
          <span className="mdi mdi-cash-multiple"/>
          <text>$$$</text>
          <span className="mdi mdi-crosshairs-gps"/>
          <text>2.9km</text>
          
          
          </div>
          <label className='badge-secondary'>Frete gratis</label>
        </div>
        <div className='col-10'>
          <h5>Produtos</h5>
          <div className='row'>
            {[1,2,3,4,5,6,7,8,9].map(()=><Card/>)}
          </div>
        </div>

      </div>
    </div>
  </div>
) 
};

export default petshop;