/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */

import React from 'react';

import { useSelector } from 'react-redux';

import Logo from '../../../assets/svg/logo.svg';

function Header({ hideCart }) {
  const { cart } = useSelector((state) => state.shop);

  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  };

  return (
    <div className="col-12">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <header>
          <img src={Logo} className="img-fluid" alt="dffsdf" />
        </header>
        {!hideCart && (
          <button
            type="button"
            onClick={() => {
              openDrawer();
            }}
            className="btn btn-secondary cart-button"
          >
            <span className="mdi mdi-cart" />
            {cart.length} items
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
