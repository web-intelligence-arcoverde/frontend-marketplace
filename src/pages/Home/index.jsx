import React, { useEffect } from 'react';
import AutoComplete from 'react-google-autocomplete';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import GetLocation from 'src/hooks/getLocation';
import Button from 'src/components/atoms/Button';
import { Container } from 'src/components/atoms/Container';
import Logo from 'src/assets/svg/shoping.svg';

import { getLocationUser } from 'src/store/modules/user/actions';

import { Header, Descripton, ContainerSearch } from './style';

function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { positionUser, loading, error } = GetLocation();

  useEffect(() => {
    if (!loading && !error) {
      dispatch(getLocationUser(positionUser));
    }
  }, [positionUser]);

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '60%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Descripton>
          <h1>Encontre suas necessidades sem qualquer dificuldade</h1>
          <p>
            Explore os fornecedores mais bem avaliados e que correspondem
            exatamente aos seus requisitos
          </p>
        </Descripton>
        <ContainerSearch>
          <AutoComplete
            placeholder="Digite o nome da sua cidade"
            apiKey="AIzaSyDENO7FZ4l8DJd3-veJU1coSCBZzOp6TNo"
            onPlaceSelected={(place) => {
              dispatch(
                getLocationUser({
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng(),
                }),
              );
            }}
          />

          <div
            style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}
          >
            <Button title="Procurar" />

            <div style={{ marginLeft: '12px' }} />

            <Button title="Pular" onClick={() => navigate('/marketplace')} />
          </div>
        </ContainerSearch>
      </div>
    </Container>
  );
}

export default Search;
