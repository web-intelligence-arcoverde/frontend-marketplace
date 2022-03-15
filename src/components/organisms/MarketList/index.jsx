import React from 'react';
import { useSelector } from 'react-redux';

import MarketCard from 'src/components/molecules/MarketCard';

import './style.css';

const MarketList = () => {
  const { data } = useSelector((state) => state.marketplace);

  return (
    <div className="container-fluid petshop-list-container">
      <div className="col-12 px-4 text-center">
        <h5>Os mercados proximos de voce</h5>
        <ul className="col-12 petshop-list ">
          {data.map((market) => (
            <MarketCard market={market} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarketList;
