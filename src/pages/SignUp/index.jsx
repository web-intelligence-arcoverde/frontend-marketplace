import React from 'react';
import { Icons } from 'src/assets';
import { Container } from 'src/components/atoms/Container';
import MultiFormStep from 'src/components/molecules/MultiFormStep';
import { Info } from './style';

const SignUp = () => {
  return (
    <Container
      direction
      responsive
      background="linear-gradient(
      -90deg
      ,#fa643d 0%,#e5a595 100%)"
    >
      <Info>
        <img src={Icons.shopping} alt="" />
        <h2>Junte-se a nós</h2>
        <h4>
          Cadastre-se , seja um colaborador e receba todas as nossas ofertas
        </h4>
      </Info>
      <MultiFormStep />
    </Container>
  );
};

export default SignUp;
