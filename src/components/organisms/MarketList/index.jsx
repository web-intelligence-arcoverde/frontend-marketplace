import React from 'react';
import { useSelector } from 'react-redux';

import MarketCard from 'src/components/molecules/MarketCard';

import './style.css';

const MarketList = () => {
  const { data } = useSelector((state) => state.marketplace);

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h4>Os mercados proximos de você</h4>
      </div>
      <ul className="market-list">
        {data.map((market) => (
          <MarketCard market={market} />
        ))}
      </ul>
    </div>
  );
};

export default MarketList;
