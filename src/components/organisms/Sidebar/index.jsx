/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';

import { Dock } from 'react-dock';
import Product from '../ProductList';
import { Container, ContainerFooter, ContainerRow, Price } from './style';

function Sidebar() {
  const cart = [];
  const total = cart.reduce((max, product) => {
    return max + product.preco;
  }, 0);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    window.addEventListener('openCart', () => {
      setOpened(true);
    });
  }, []);

  return (
    <Dock
      position="right"
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible);
      }}
    >
      <Container>
        <h5>Minha sacola ({cart.length})</h5>
        <ContainerRow>
          {cart.map((p) => (
            <Product Product={p} />
          ))}
        </ContainerRow>
        <ContainerFooter>
          <Price>
            <b>Total</b>
            <h3>R$ {total.toFixed(2)}</h3>
          </Price>
          <button
            type="button"
          
          >
            Finalizar compra
          </button>
        </ContainerFooter>
      </Container>
    </Dock>
  );
}

export default Sidebar;
