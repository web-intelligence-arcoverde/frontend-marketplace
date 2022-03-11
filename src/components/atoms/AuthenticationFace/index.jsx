import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Facebook from '../../../assets/svg/facebook.svg';
import { Authentication } from './styles';

const AuthenticationFace = () => {
  const componentClicked = () => {
    console.log('clicked');
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
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
  );
};

export default AuthenticationFace;
