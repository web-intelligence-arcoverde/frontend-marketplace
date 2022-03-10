import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from '../../components/atoms/Container';

function Search() {
  const navigate = useNavigate();

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Procure pela sua cidade"
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
}

export default Search;
