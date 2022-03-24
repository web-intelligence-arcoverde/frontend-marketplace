import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { readMarketListRequest } from 'src/store/modules/marketplace/actions';

import Header from 'src/components/organisms/Header';
import MarketList from 'src/components/organisms/MarketList';
import Map from 'src/components/organisms/Map';

import './style.css';

export default function Marketplace() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readMarketListRequest());
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Map />
      <MarketList />
    </div>
  );
}
