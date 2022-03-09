/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { requestPetshop } from '../../store/modules/shop/actions';

import Header from '../../components/header';
import Card from '../../components/product/card';
import './style.css';

function petshop() {
  const { id } = useParams(); // Unpacking and retrieve id
  const dispatch = useDispatch();

  const shop = useSelector((state) => state.shop.petshop);

  console.log(shop);

  useEffect(() => {
    dispatch(requestPetshop(id));
  }, []);

  return (
    <div className="h-100">
      <Header />
      <div className="container ">
        <div className="row">
          <div className="col-2">
            <img src={shop.logo} alt="petlovelogo" />
            <b>{shop.nome}</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star" />
              <text>
                <b>2,8</b>
              </text>
              <span className="mdi mdi-cash-multiple" />
              <text>{shop.categoria}</text>
              <span className="mdi mdi-crosshairs-gps" />
              <text>2.9km</text>
            </div>
            <label className="badge-secondary">Frete gratis</label>
          </div>
          <div className="col-10">
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

export default petshop;
