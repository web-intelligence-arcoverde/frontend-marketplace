/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { requestPetshop } from '../../store/modules/shop/actions';

import Header from '../../components/organisms/Header';
import Card from '../../components/molecules/ProductCard';
import './style.css';

function Market() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const shop = useSelector((state) => state.shop.petshop);

  useEffect(() => {
    dispatch(requestPetshop(id));
  }, []);

  return (
    <div className="h-100">
      <Header />
      <div className="container ">
        <div className="row">
          <div className="col-9">
            <h5>Produtos</h5>
            <div className="row">
              {shop.product?.map((p) => (
                <Card product={p} key={p.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
