import React from 'react';
import Button from 'src/components/atoms/Button';
import AutoComplete from 'react-google-autocomplete';
import { useNavigate } from 'react-router-dom';
import { Container } from 'src/components/atoms/Container';
import { Header, CardSearch, Descripton } from './styles';
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
          <Button title="Entrar" onClick={() => navigate('./signin')} />
        </div>
      </Header>
      <Descripton>
        <h1>Encontre suas necessidades sem qualquer dificuldade</h1>
        <p>
          Explore os fornecedores mais bem avaliados e que correspondem
          exatamente aos seus requisitos
        </p>
      </Descripton>
      <CardSearch>
        <AutoComplete
          apiKey="AIzaSyDENO7FZ4l8DJd3-veJU1coSCBZzOp6TNo"
          onPlaceSelected={(place) => {
            console.log(place);
          }}
        />
        <Button title="Procurar" />
        <Button title="Pular" onClick={() => navigate('/marketplace')} />
      </CardSearch>
    </Container>
  );
}

export default Search;
