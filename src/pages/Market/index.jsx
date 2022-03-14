/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { requestPetshop } from '../../store/modules/shop/actions';

import Header from '../../components/organisms/Header';
import Card from '../../components/molecules/ProductCard';
import ProductLogo from '../../components/molecules/ProductLogo';
import { Container, ContainerRow } from './styled';

function Market() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const shop = useSelector((state) => state.shop.petshop);

  useEffect(() => {
    dispatch(requestPetshop(id));
  }, []);

  return (
    <Container>
      <Header />
      <div className="contain">
        <ProductLogo />
        <div>
          <ContainerRow>
            <div className="centralizando">
              {shop.product?.map((p) => (
                <Card product={p} key={p.id} />
              ))}
            </div>
          </ContainerRow>
        </div>
      </div>
    </Container>
  );
}

export default Market;
