import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import GoogleMapReact from 'google-map-react';
import { Icons } from 'src/assets';

import Marker from '../../molecules/Marker';

import { ContainerButton, Container, TopContainerButton } from './style';

const Map = () => {
  const { data } = useSelector((state) => state.marketplace);
  const { location } = useSelector((state) => state.user);

  const user = useSelector((state) => state.user.data);

  const [addNewMarket, setAddNewMarket] = useState(false);

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
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDENO7FZ4l8DJd3-veJU1coSCBZzOp6TNo' }}
        center={location}
        defaultZoom={14}
        onClick={onClick}
        options={{ fullscreenControl: false }}
      >
        {data.map((point) => (
          <Marker
            market={point}
            lat={point.location.lat}
            lng={point.location.lng}
          />
        ))}
      </GoogleMapReact>
      <TopContainerButton>
        <img src={Icons.location} alt="add" />
      </TopContainerButton>

      {user?.role && (
        <ContainerButton onClick={() => setAddNewMarket(!addNewMarket)}>
          <img src={Icons.location} alt="add" />
        </ContainerButton>
      )}
    </Container>
  );
};

export default Map;
