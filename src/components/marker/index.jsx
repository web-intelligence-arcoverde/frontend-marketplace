/* eslint-disable no-underscore-dangle */
import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MarkerIcon from '../../assets/images/marker.png'
import MarkerIconSelected from '../../assets/images/markerselected.png'

function marker({petshop}) {

const { petshopMapSelected } = useSelector(state =>  state.shop)
  
  return (
    <Link to={`/petshop/${petshop._id}`}>
       <img src={petshopMapSelected === petshop._id ? MarkerIconSelected : MarkerIcon} alt='marker-icon' />
       <img className='img-marker' src={petshop.logo} alt='logo' />
    </Link>
  );
}

export default marker;