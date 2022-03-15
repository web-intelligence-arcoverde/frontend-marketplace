/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toogleCartProduct } from '../../../store/modules/marketplace/actions';
import { Container, ContainerFooter } from './styled';

function card({ product }) {
  const { id, capa, nome, preco } = product;

  const dispatch = useDispatch();
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
        <button
          onClick={() => dispatch(toogleCartProduct(product))}
          type="button"
        >
          {added ? '-' : '+'}
        </button>
      </ContainerFooter>
    </Container>
  );
}

export default card;
