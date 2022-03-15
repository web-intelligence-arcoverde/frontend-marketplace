import React from 'react';
import { useSelector } from 'react-redux';

import GoogleMapReact from 'google-map-react';
import { AddCoordinate, ContainerMap } from './style';

import Marker from '../../molecules/Marker';

const Map = () => {
  const { data } = useSelector((state) => state.marketplace);

  const { location } = useSelector((state) => state.user);

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

    console.log(market);
  };

  return (
    <ContainerMap>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDENO7FZ4l8DJd3-veJU1coSCBZzOp6TNo' }}
        center={location}
        defaultZoom={14}
        onClick={onClick}
      >
        {data.map((point) => (
          <Marker
            market={point}
            lat={point.location.lat}
            lng={point.location.lng}
          />
        ))}
      </GoogleMapReact>
      <AddCoordinate>Add</AddCoordinate>
    </ContainerMap>
  );
};
export default Map;
