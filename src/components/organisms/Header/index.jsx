import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Icons } from 'src/assets';

import Button from 'src/components/atoms/Button';

const Header = ({ hideCart }) => {
  const { cart } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log(token);

  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  };

  const goToRouter = () => {
    if (!token) {
      navigate('/signin');
    } else {
      console.log(
        'criar um sidebar ou uma pagina com as infromações do usuario',
      );
    }
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
            img={Icons.cart}
            background="WHITE"
          >
            {cart.length} items
          </Button>
        )}

        <Button
          type="button"
          img={Icons.user}
          background="WHITE"
          color="BLACK"
          onClick={goToRouter}
        />
      </div>
    </header>
  );
};

export default Header;
