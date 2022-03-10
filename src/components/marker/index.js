import React from 'react';
import { Link } from 'react-router-dom';

function Marker() {
  return (
    <Link to="/">
      <div
        style={{ width: '20px', height: '20px', backgroundColor: 'black' }}
      />
    </Link>
  );
}

export default Marker;
