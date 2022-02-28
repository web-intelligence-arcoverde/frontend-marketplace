import React from 'react';
import Logo from '../../assets/svg/logo.svg'
import LogoWhite from '../../assets/svg/logo-white.svg'
import './style.css'



function header({WhiteVersion ,  hideCart}) {
  
  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event)
  }

  return ( 
  <div className='col-12'>
    <header className='py-4 px-4 text-center'>
      <img src={WhiteVersion?LogoWhite:Logo}  className="img-fluid" alt='dffsdf'/>
    </header>
    { !hideCart && (
      <button 
      type='button' 
      onClick={()=>{openDrawer()}} 
      className='btn btn-secondary cart-button'
      >
      <span className='mdi mdi-cart' />
      2 items
    </button>
    )}
</div> );
}

export default header;