import React from 'react';
import { Link } from 'react-router-dom';

function Marker({ market }) {
  const { _id } = market;

  return (
    <Link to={`/market/${_id}`}>
      <div
        style={{ width: '20px', height: '20px', backgroundColor: 'black' }}
      />
    </Link>
  );
}

export default Marker;
