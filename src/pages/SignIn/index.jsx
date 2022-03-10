// eslint-disable-next-line no-unused-vars
import FacebookLogin from 'react-facebook-login';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCostumer as setStoreCostumer } from '../../store/modules/shop/actions';
import {
  Authentication,
  CardForm,
  ColumnLeft,
  Container,
  FormSingIn,
} from './styles';
import Shoping from '../../assets/svg/shoping.svg';
import Facebook from '../../assets/svg/facebook.svg';

function SignIn() {
  const dispatch = useDispatch();
  const [costumer, setCostumer] = useState({
    email: '',
    password: '',
  });
  const goToCheckout = () => {
    dispatch(setStoreCostumer(costumer));
  };
  const componentClicked = () => {
    console.log('clicked');
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <Container>
      <ColumnLeft>
        <img src={Shoping} alt="img" />
      </ColumnLeft>
      <CardForm>
        <h3>Fazer Login</h3>
        <FormSingIn>
          <input
            type="email"
            required
            placeholder="E-mail"
            onChange={(e) => {
              setCostumer({ ...costumer, email: e.target.value });
            }}
          />

          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => {
              setCostumer({
                ...costumer,
                password: e.target.value,
              });
            }}
          />

          <button
            type="button"
            onClick={() => {
              goToCheckout();
            }}
          >
            Entrar
          </button>
        </FormSingIn>
        <h5>Ou</h5>
        <Authentication>
          <div>
            <img src={Facebook} alt="facebook" />
          </div>
          <div>
            <FacebookLogin
              appId="1088597931155576"
              autoLoad="true"
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
              cssClass="my-facebook-button-class"
              textButton="Entrar com o Facebook"
            />
          </div>
        </Authentication>
      </CardForm>
    </Container>
  );
}

export default SignIn;
