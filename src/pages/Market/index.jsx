/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useParams } from 'react-router-dom';

import Header from 'src/components/organisms/Header';

import MarketInformation from 'src/components/molecules/MarketInformation';
import MarketProductList from 'src/components/molecules/MarketListProducts';

import { ContainerMarket } from './styled';

function Market() {
  const { id } = useParams();
  console.log(id);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          marginTop: '20px',
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />

        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <ContainerMarket>
            <MarketInformation />

            <MarketProductList />
          </ContainerMarket>
        </div>
      </div>
    </div>
  );
}

export default Market;
