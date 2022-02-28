import React from 'react';
import Header from '../../components/header';
import Product from '../../components/product/list';
import './style.css';

function checkout() {
  return (
  <div className='h-100'>
    <Header hideCart/>
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-6'>
          <span className='section-title' >Dados entrega</span>
          <div className='row mb-3'>
            <div className='col-12'>
              <input type='text' placeholder='CEP' className=' form-control form-control-lg' />
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-6'>
              <input type='text' placeholder='Cidade' className=' form-control form-control-lg' />
            </div>
            <div className="col-6  pl-0">
              <input type='text' placeholder='Logradouro' className=' form-control form-control-lg' />
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-5'>
              <input type='text' placeholder='Numero' className=' form-control form-control-lg' />
            </div>
            <div className="col-5  pl-0">
              <input type='text' placeholder='Bairro' className=' form-control form-control-lg' />
            </div>
            <div className="col-2  pl-0">
              <input type='text' placeholder='UF' className=' form-control form-control-lg' />
            </div>
          </div>
          <span className='section-title' >Dados de pagamento </span>
          <div className='row mb-3'>
            <div className='col-12'>
              <input type='text' placeholder='Numéro do cartao' className=' form-control form-control-lg' />
            </div>
          </div>
          <div className='row mb-3' >
            <div className='col-9'>
              <input type='text' placeholder='Validade' className=' form-control form-control-lg' />
            </div>
            <div className="col-3  pl-0">
              <input type='text' placeholder='CVV' className=' form-control form-control-lg' />
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-6'>
              <input type='text' placeholder='Nome do titular' className=' form-control form-control-lg' />
            </div>
            <div className="col-6  pl-0">
              <input type='text' placeholder='CPF/CNPJ do titular' className=' form-control form-control-lg' />
            </div>
          </div>
          <div className='row mt-4'>
              <div className='col-12 d-flex justify-content-between align-items-center'>
                <b>total:</b>
                <h3>R$ 30,00</h3>
              </div>
              <div className='col-12'>
                <button type='submit' className='btn btn-block btn-lg btn-primary'>Finalizar Compra</button>
              </div>
            </div>
        </div>
        <div className='col-6 products'>
            <h4>Minha Sacola (5)</h4>
          <div className='box col mb-4 box-sidebar '>
            <div className='row '>
              {[1,2,3,4,5,6,7,8,9].map(() => (<Product/>))} 
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
  );
}

export default checkout;