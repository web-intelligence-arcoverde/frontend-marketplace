import React from 'react';
import { useSelector } from 'react-redux';

import Card from 'src/components/molecules/ProductCard';

import { Container } from './style';

export default function () {
  const { product } = useSelector((state) => state.market.data);
  return (
    <Container>
      {product?.map((p) => (
        <Card product={p} key={p.id} />
      ))}
    </Container>
  );
}
