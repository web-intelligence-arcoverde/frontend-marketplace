import React from 'react';
import GoogleLogin from 'react-google-login';

import { Authentication } from '../AuthenticationFacebook/styles';

const AuthenticationGoogle = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <Authentication>
      <div>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Entrar com o Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
          className="google"
        />
      </div>
    </Authentication>
  );
};

export default AuthenticationGoogle;
