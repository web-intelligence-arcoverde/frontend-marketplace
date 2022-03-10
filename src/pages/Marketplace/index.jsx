import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react';
import './style.css';
import Header from '../../components/Header';
import Petshop from '../../components/Petshop';
import Map from '../../components/Map';

import Sidebar from '../../components/Sidebar';

import { readMarketRequest } from '../../store/modules/market/actions';

export default function Marketplace() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.market);

  useEffect(() => {
    dispatch(readMarketRequest());
  }, []);

  return (
    <div className="h-100">
      <Header />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais proximos de voce</h5>
          <ul className="col-12 petshop-list ">
            {data.map((p) => (
              <Petshop petshops={p} />
            ))}
          </ul>
        </div>
      </div>
      <Map petshops={data} />
      <Sidebar />
    </div>
  );
}
