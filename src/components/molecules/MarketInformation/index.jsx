/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styled';

function ProductLogo() {
  const { data } = useSelector((state) => state.market);

  return (
    <Container>
      <img
        src={data.logo}
        alt="petlovelogo"
        style={{ width: '200px', height: '200px' }}
      />
      <b>{data.nome}</b>
      <div className="petshop-infos">
        <span className="mdi mdi-star" />
        <text>
          <b>2,8</b>
        </text>
        <span className="mdi mdi-cash-multiple" />
        <text>{data.categoria}</text>
        <span className="mdi mdi-crosshairs-gps" />
        <text>2.9km</text>
      </div>
      <label className="badge-secondary">Frete gratis</label>
    </Container>
  );
}

export default ProductLogo;
