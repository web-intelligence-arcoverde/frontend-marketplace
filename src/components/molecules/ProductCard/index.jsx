/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { useSelector } from 'react-redux';
import { Container, ContainerFooter } from './styled';

function card({ product }) {
  const { id, capa, nome, preco } = product;

  const { cart } = useSelector((state) => state.marketplace);
  const added = cart.findIndex((p) => p._id === id) !== -1;

  return (
    <Container>
      <img src={capa} alt="product" />
      <small>
        <b>{nome}</b>
      </small>
      <ContainerFooter>
        <h5> R$ {preco.toFixed(2)}</h5>
        <button type="button">{added ? '-' : '+'}</button>
      </ContainerFooter>
    </Container>
  );
}

export default card;
