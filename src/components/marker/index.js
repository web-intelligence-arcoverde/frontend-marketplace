/* eslint-disable no-underscore-dangle */
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function marker({ petshop }) {
  return (
    <Link to={`/market/${petshop._id}`}>
      <div
        style={{ width: '20px', height: '20px', backgroundColor: 'black' }}
      />
    </Link>
  );
}

export default marker;
