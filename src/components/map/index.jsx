/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker';
import { AddCoordinate, ContainerMap } from './style';
import CursosFlag from '../../assets/svg/cursosflag.svg';

function Map({ petshops }) {
  const [positionUser, setPositionUser] = useState({});
  const [loading, setLoading] = useState(true);
  // const [setMarket] = useState({});
  // const [addMarket, setAddMarket] = useState(false);

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

  const toggle = () => {
    const body = document.body;
    body.id = body.id ? body.id : 'body_id';

    body.use_custom_cursor = !body.use_custom_cursor;

    body.style.cursor = body.use_custom_cursor ? { CursosFlag } : 'auto';
  };

  // handleMapReady(mapProps,maap) {
  //   maap.setOptions({
  //     draggableCursor: "default",
  //     draggingCursor: "pointer"
  //   });
  // }

  return (
    <ContainerMap>
      <GoogleMapReact
        options={{
          draggableCursor: 'url(../../assets/svg/cursosflag.svg), crosshair',
          draggingCursor: 'pointer',
        }}
        // onClick={(ev) => {
        //   if (addMarket) {
        //     setMarket({ ev });
        //   }
        // }}
        bootstrapURLKeys={{ key: 'AIzaSyDENO7FZ4l8DJd3-veJU1coSCBZzOp6TNo' }}
        center={positionUser}
        defaultZoom={15}
      >
        {petshops.map((p) => (
          <Marker petshop={p} lat={p.location.lat} lng={p.location.lng} />
        ))}
      </GoogleMapReact>
      <AddCoordinate onClick={toggle}> Add </AddCoordinate>
    </ContainerMap>
  );
}
export default Map;
