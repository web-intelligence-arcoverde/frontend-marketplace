/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker';
import { AddCoordinate, ContainerMap } from './style';

function Map({ petshops }) {
  const [positionUser, setPositionUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [market, setMarket] = useState({});

  const [addMarket, setAddMarket] = useState(false);

  console.log(loading);

  useEffect(() => {
    const getPositionUser = async () => {
      await navigator.geolocation.getCurrentPosition(
        (position) =>
          setPositionUser({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }),
        setLoading(false),
        (err) => console.error(err),
      );
    };
    getPositionUser();
  }, []);

  return (
    <ContainerMap>
      <GoogleMapReact
        onClick={(ev) => {
          console.log(ev);
        }}
        bootstrapURLKeys={{ key: 'AIzaSyDENO7FZ4l8DJd3-veJU1coSCBZzOp6TNo' }}
        center={positionUser}
        defaultZoom={15}
      >
        {petshops.map((p) => (
          <Marker petshop={p} lat={p.location.lat} lng={p.location.lng} />
        ))}
      </GoogleMapReact>
      <AddCoordinate onClick={() => setAddMarket(!addMarket)}>
        {' '}
        Add{' '}
      </AddCoordinate>
    </ContainerMap>
  );
}
export default Map;
