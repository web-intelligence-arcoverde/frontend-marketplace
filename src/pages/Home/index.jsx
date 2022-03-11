import React from 'react';

import AutoComplete from 'react-google-autocomplete';

import { useNavigate } from 'react-router-dom';

import { Container } from '../../components/atoms/Container';

function Search() {
  const navigate = useNavigate();

  return (
    <Container>
      <div style={{ width: '500px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <AutoComplete
            apiKey="AIzaSyDENO7FZ4l8DJd3-veJU1coSCBZzOp6TNo"
            onPlaceSelected={(place) => {
              console.log(place);
            }}
          />
          <button type="button">Procurar</button>
        </div>

        <button type="button" onClick={() => navigate('/marketplace')}>
          Pular
        </button>
      </div>
    </Container>
  );
}

export default Search;
