import React from 'react';
import { useSelector } from 'react-redux';

import MarketCard from 'src/components/molecules/MarketCard';

import { Container } from './style';

const MarketList = () => {
  const { data } = useSelector((state) => state.marketplace);

  return (
    <Container>
  
      <ul className="market-list">
        {data.map((market) => (
          <MarketCard market={market} />
        ))}
      </ul>
    </Container>
  );
};

export default MarketList;
