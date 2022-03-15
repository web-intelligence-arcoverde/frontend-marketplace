/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import GoogleMapReact from 'google-map-react';
import { AddCoordinate, ContainerMap } from './style';

import { createMarketRequest } from '../../../store/modules/market/actions';

import Marker from '../../molecules/Marker';

function Map({ petshops }) {
  const [addMarket, setAddMarket] = useState(false);

  const dispatch = useDispatch();

  const onClick = (event) => {
    const { lat, lng } = event;

    const market = {
      id: new Date().getTime().toString(),
      nome: 'PEDIGREE®',
      logo: 'https://i.imgur.com/zxPLkIi.png',
      location: {
        lat,
        lng,
      },
    };

    dispatch(createMarketRequest(market));
  };

  return (
    <ContainerMap>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDENO7FZ4l8DJd3-veJU1coSCBZzOp6TNo' }}
        center={{ lat: -8.415723, lng: -37.067129 }}
        defaultZoom={15}
        onClick={onClick}
      >
        {petshops.map((p) => (
          <Marker petshop={p} lat={p.location.lat} lng={p.location.lng} />
        ))}
      </GoogleMapReact>
      <AddCoordinate onClick={() => setAddMarket(!addMarket)}>
        Add
      </AddCoordinate>
    </ContainerMap>
  );
}
export default Map;
