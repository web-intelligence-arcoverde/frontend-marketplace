import React from 'react';
import AutoComplete from 'react-google-autocomplete';
import { useNavigate } from 'react-router-dom';
import { Container } from 'src/components/atoms/Container';
import { Header, CardSearch } from './styles';
import Logo from '../../assets/svg/shoping.svg';

function Search() {
  const navigate = useNavigate();

  return (
    <Container justify="none">
      <Header>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <h1> teste</h1>
        </div>
      </Header>
      <div>
        <h1>Encontre suas necessidades sem qualquer dificuldade</h1>
      </div>
      <CardSearch>
        <AutoComplete
          apiKey="AIzaSyDENO7FZ4l8DJd3-veJU1coSCBZzOp6TNo"
          onPlaceSelected={(place) => {
            console.log(place);
          }}
        />
        <button type="button">Procurar</button>
        <button type="button" onClick={() => navigate('/marketplace')}>
          Pular
        </button>
      </CardSearch>
    </Container>
  );
}

export default Search;
