import React from 'react';
import Header from '../../components/header'
import illustration from '../../assets/svg/illustration.svg'
// import { Container } from './styles';

function cadastro() {
  return (<div className='container-fluid h-100 bg-primary'>
     
      <div className='row'>
        <Header WhiteVersion hideCart />
        <div className='col-6 my-auto text-center'>
          <img src={illustration} className='img-fluid' alt='sfdsf'/>
        </div>
        <div className='col-6'>
          <div className='box col-8'>
            <h2 className='text-center'>Falta pouco para fazer o seu pet ser feliz.</h2>
            <br/>
            <br/>
            <form>
              <input type='text' className='form-control form-control-lg mb-3' placeholder='NOME COMPLETO' />
              <input type='text' className='form-control form-control-lg mb-3' placeholder='E-mail' />
              <input type='text' className='form-control form-control-lg mb-3' placeholder='CPF' />
              <input type='text' className='form-control form-control-lg mb-3' placeholder='Telefone' />
              <input type='date' className='form-control form-control-lg mb-3' placeholder='Data De Nascimento' />
              <button type='submit' className='btn btn-lg btn-block btn-secondary'>Finalizar pedido</button>
            </form>
          </div>
        </div>
      </div>
  </div>);
}

export default cadastro;
