import React, { useState, useEffect } from 'react';
import Button from 'src/components/atoms/Button';
import AutoComplete from 'react-google-autocomplete';
import { useNavigate } from 'react-router-dom';
import { Container } from 'src/components/atoms/Container';
import { Header, CardSearch, Descripton } from './style';
import Logo from '../../assets/svg/shoping.svg';

function Search() {
  const navigate = useNavigate();

  const [positionUser, setPositionUser] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(positionUser, loading);

  useEffect(() => {
    const getPositionUser = async () => {
      await navigator.geolocation.getCurrentPosition(
        (position) =>
          setPositionUser({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }),
        setLoading(false),
        (err) => console.error(err),
      );
    };
    getPositionUser();
  }, []);

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
