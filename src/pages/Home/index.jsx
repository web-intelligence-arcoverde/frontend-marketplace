import React, { useEffect } from 'react';
import AutoComplete from 'react-google-autocomplete';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLocationUser } from 'src/store/modules/user/actions';
import { Container } from 'src/components/atoms/Container';
import GetLocation from 'src/hooks/getLocation';
import Button from 'src/components/atoms/Button';
import { Icons } from 'src/assets';
import Login from 'src/assets/icons/login.svg';
import Footer from 'src/components/organisms/Footer'

import {
  Header,
  Descripton,
  ContainerSearch,
  Card,
  CardButton,
  LoginMobile,
  LoginDesktop,
} from './styles';

function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { positionUser } = GetLocation();

  const isEmptyPositionUser = Object.keys(positionUser).length === 0;

  useEffect(() => {
    if (!isEmptyPositionUser) {
      dispatch(getLocationUser(positionUser));
    }
  }, [positionUser]);

  return (
    <Container justify="none">
      <Header>
        <div>
          <img src={Icons.shopping} alt="" />
        </div>
        <LoginMobile>
          <Button
            background="WHITE"
            img={Login}
            onClick={() => navigate('./signin')}
          />
        </LoginMobile>
        <LoginDesktop>
          <Button title="Entrar" onClick={() => navigate('./signin')} />
        </LoginDesktop>
      </Header>
      <Card>
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
          <CardButton>
            <Button title="Procurar" />
            <Button
              background="GRAY"
              color="BLACK"
              title="Pular"
              onClick={() => navigate('/marketplace')}
            />
          </CardButton>
        </ContainerSearch>
      </Card>
      <Footer/>
    </Container>
  );
}

export default Search;
