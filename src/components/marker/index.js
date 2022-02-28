import React from 'react';
import './style.css';
import PetLoveLogo from '../../assets/images/petlovelogo.png'
import MarkerIcon from '../../assets/images/marker.png'
// import MarkerIconSelected from '../../assets/images/markerselected.png'

function marker() {
  return (
    <div>
       <img src={MarkerIcon} alt='marker-icon' />
       <img className='img-marker' src={PetLoveLogo} alt='logo' />
    </div>
  );
}

export default marker;