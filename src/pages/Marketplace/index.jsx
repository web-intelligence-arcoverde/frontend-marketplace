import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react';
import './style.css';
import Header from '../../components/header';
import Petshop from '../../components/petshop';
import Map from '../../components/map';

import Sidebar from '../../components/sidebar';

import { requestPetshops } from '../../store/modules/shop/actions';

export default function Marketplace() {
  const dipatch = useDispatch();
  const { petshops } = useSelector((state) => state.shop);

  useEffect(() => {
    dipatch(requestPetshops());
  }, []);

  return (
    <div className="h-100">
      <Header />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais proximos de voce</h5>
          <ul className="col-12 petshop-list ">
            {petshops.map((p) => (
              <Petshop petshops={p} key={p.id} />
            ))}
          </ul>
        </div>
      </div>
      <Map petshops={petshops} />
      <Sidebar />
    </div>
  );
}
