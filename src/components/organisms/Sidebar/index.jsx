/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';

import ArrowLeftIcon from 'src/assets/svg/arrow-left.svg';
import ShoppingBagIcon from 'src/assets/svg/shopping-bag.svg';

import { Dock } from 'react-dock';
import Product from '../ProductList';
import { Badge, Container, ContainerPrice, ContainerRow, Price } from './style';

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
        <Badge>
            <button type='button'><img src={ArrowLeftIcon} alt="arrow-left" /></button>
            <h5>Carrinho de compras</h5>
            <img src={ShoppingBagIcon} alt="carrinho" />
        </Badge>
        <ContainerRow>
          {cart.map((p) => (
            <Product Product={p} />
            ))}
        </ContainerRow>
        <ContainerPrice>
          <Price>
            <b>Entrega</b>
            <h3>R$ {total.toFixed(2)}</h3>
          </Price>
          <Price>
            <b>Subtotal</b>
            <h3>R$ {total.toFixed(2)}</h3>
          </Price>
          <Price>
            <b>Total</b>
            <h3>R$ {total.toFixed(2)}</h3>
          </Price>
        </ContainerPrice>
        <button type="button">Finalizar compra</button>
      </Container>
    </Dock>
  );
}

export default Sidebar;
