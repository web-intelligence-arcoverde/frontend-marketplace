import React from 'react';
import { Link } from 'react-router-dom';

function marker({ petshop }) {
  return (
    <Link to={`/market/${petshop.id}`}>
      <div
        style={{ width: '20px', height: '20px', backgroundColor: 'black' }}
      />
    </Link>
  );
}

export default marker;
