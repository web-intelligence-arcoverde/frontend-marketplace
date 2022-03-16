import React from 'react';

import { useSelector } from 'react-redux';

import Button from 'src/components/atoms/Button';

import { Icons } from 'src/assets';

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
        alignItems: 'center',
      }}
    >
      <img
        src={Icons.shopping}
        className="img-fluid"
        alt="dffsdf"
        style={{ width: '80px', height: '80px' }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {!hideCart && (
          <Button
            type="button"
            onClick={openDrawer}
            img={Icons.location}
            background="WHITE"
          >
            {cart.length} items
          </Button>
        )}

        <Button
          type="button"
          onClick={openDrawer}
          img={Icons.location}
          background="WHITE"
          color="BLACK"
        />
      </div>
    </header>
  );
}

export default Header;
