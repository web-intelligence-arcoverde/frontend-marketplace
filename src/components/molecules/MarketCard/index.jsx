/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setShopMapSelected,
  setMapCenter,
} from '../../../store/modules/shop/actions';

function Petshop({ petshops }) {
  const dispatch = useDispatch();
  const { petshopMapSelected } = useSelector((state) => state.shop);

  const setSelectedPetshop = () => {
    dispatch(setShopMapSelected(petshops._id));
    dispatch(setMapCenter(petshops.location));
  };

  return (
    <li
      className={`petshop d-inline-block ${
        petshopMapSelected === petshops._id ? 'active' : ''
      }`}
      onClick={() => setSelectedPetshop()}
    >
      <div className="d-inline-block">
        <img src={petshops.logo} alt="petlovelogo" className="img-fluid" />
      </div>
      <div className="d-inline-block pl-3 align-bottom">
        <b>{petshops.nome}</b>
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
}

export default Petshop;
