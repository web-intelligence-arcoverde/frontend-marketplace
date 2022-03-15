import React from 'react';

import { useSelector } from 'react-redux';
import Logo from 'src/assets/svg/shoping.svg';

function Header({ hideCart }) {
  const { cart } = useSelector((state) => state.user);

  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  };

  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <img src={Logo} className="img-fluid" alt="dffsdf" />

      {!hideCart && (
        <button type="button" onClick={openDrawer}>
          <span className="mdi mdi-cart" />
          {cart.length} items
        </button>
      )}
    </header>
  );
}

export default Header;
