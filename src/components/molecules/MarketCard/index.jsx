/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-curly-brace-presence */

import React from 'react';

import { useDispatch } from 'react-redux';
import { getLocationUser } from 'src/store/modules/user/actions';

import { Text, CardInfos, Container } from './style';

const MarketCard = ({ market }) => {
  const dispatch = useDispatch();

  return (
    <Container
      onClick={() => dispatch(getLocationUser(market.location))}
    >
      <div>
        <img src={market.logo} alt="petlovelogo" className="img-fluid" />
      </div>
      <CardInfos>
        <b>{market.nome}</b>
        <div className="mdicontainer">
          <div className="gap">
            <span className="mdi mdi-star" />
            <Text><b>2,8</b></Text>
          </div>
          <div className="gap">
            <span className="mdi mdi-cash-multiple" />
            <Text>$$$</Text>
          </div>
          <div className="gap">
            <span className="mdi mdi-crosshairs-gps" />
            <Text>2.9km</Text>
          </div>
        </div>
        <label className="badge-secondary">Frete gratis</label>
      </CardInfos>
    </Container>
  );
};

export default MarketCard;
