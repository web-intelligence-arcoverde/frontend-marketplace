/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-curly-brace-presence */

import React from 'react';

import { useDispatch } from 'react-redux';
import { getLocationUser } from 'src/store/modules/user/actions';

import './style.css';

const MarketCard = ({ market }) => {
  const dispatch = useDispatch();

  return (
    <li
      className={`petshop d-inline-block`}
      onClick={() => dispatch(getLocationUser(market.location))}
    >
      <div className="d-inline-block">
        <img src={market.logo} alt="petlovelogo" className="img-fluid" />
      </div>
      <div className="d-inline-block pl-3 align-bottom">
        <b>{market.nome}</b>
        <div className="petshop-infos">
          <span className="mdi mdi-star" />
          <text>
            <b>2,8</b>
          </text>
          <span className="mdi mdi-cash-multiple" />
          <text>$$$</text>
          <span className="mdi mdi-crosshairs-gps" />
          <text>2.9km</text>
        </div>
        <label className="badge-secondary">Frete gratis</label>
      </div>
    </li>
  );
};

export default MarketCard;
