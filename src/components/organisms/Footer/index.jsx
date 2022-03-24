import React from 'react';
import { ContainerFooter  } from './style';

function Footer() {

  const anoAtual = new Date().getFullYear(); 

  return (
  <ContainerFooter>
    <h5> &copy; copyright-Web intelligence {anoAtual}</h5>   
  </ContainerFooter>
  );
}

export default Footer;