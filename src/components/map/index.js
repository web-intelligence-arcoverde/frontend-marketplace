/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker';

function Map({petshops}) {
  const{ mapCenter } = useSelector(state => state.shop)
  return (
  <div className='container-map'>
    <GoogleMapReact 
    bootstrapURLKeys={{ key: 'AIzaSyDENO7FZ4l8DJd3-veJU1coSCBZzOp6TNo' }}
    center={mapCenter}
    defaultZoom={15}
    >
       {petshops.map((p)=>(
      <Marker petshop={p} lat={p.location.lat} lng={p.location.lng}/>
    ))} 
    </GoogleMapReact>
  </div>
  );
}
export default Map;