/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PetLoveLogo from '../../assets/images/petlovelogo.png'
import './style.css';

function petshop() {
  return (
  <li className='petshop d-inline-block'>
    <div className='d-inline-block'>
      <img src={PetLoveLogo} alt='petlovelogo' className='img-fluid'/>
    </div>
    <div className='d-inline-block pl-3 align-bottom'>
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
  </li>
  );
}

export default petshop;