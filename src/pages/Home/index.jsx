import React, { useState } from 'react';

import AutoComplete from 'react-google-autocomplete';

import { useNavigate } from 'react-router-dom';

import { Container } from '../../components/atoms/Container';

const Search = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState({});

  console.log(
    location.geometry.location.lat(),
    location.geometry.location.lng(),
  );

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AutoComplete
          apiKey="AIzaSyDENO7FZ4l8DJd3-veJU1coSCBZzOp6TNo"
          onPlaceSelected={(place) => {
            setLocation(place);
          }}
        />
        <button type="button" className="btn btn-secondary">
          Procurar
        </button>
      </div>

      <button
        type="button"
        className="btn btn-light"
        onClick={() => navigate('/marketplace')}
      >
        Pular
      </button>
    </Container>
  );
};

export default Search;
