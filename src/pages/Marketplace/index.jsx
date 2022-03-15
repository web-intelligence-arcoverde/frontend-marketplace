import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { readMarketListRequest } from 'src/store/modules/marketplace/actions';

import Header from 'src/components/organisms/Header';
import MarketList from 'src/components/organisms/MarketList';
import Map from 'src/components/organisms/Map';

import './style.css';

export default function Marketplace() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state);

  console.log(data, loading);

  useEffect(() => {
    dispatch(readMarketListRequest());
  }, []);

  return (
    <div className="h-100">
      <Header />
      <MarketList />
      <Map />
    </div>
  );
}
