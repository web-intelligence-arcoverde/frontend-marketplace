import React from 'react';
import { useSelector } from 'react-redux';

import Product from '../../components/organisms/ProductList';
import Header from '../../components/organisms/Header';
import './style.css';

function Checkout() {
  const { cart } = useSelector((state) => state.shop);

  return (
    <div className="h-100">
      <Header hideCart />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span className="section-title">Dados entrega</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className=" form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Cidade"
                  className=" form-control form-control-lg"
                />
              </div>
              <div className="col-6  pl-0">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className=" form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <input
                  type="text"
                  placeholder="Numero"
                  className=" form-control form-control-lg"
                />
              </div>
              <div className="col-5  pl-0">
                <input
                  type="text"
                  placeholder="Bairro"
                  className=" form-control form-control-lg"
                />
              </div>
              <div className="col-2  pl-0">
                <input
                  type="text"
                  placeholder="UF"
                  className=" form-control form-control-lg"
                />
              </div>
            </div>
            <span className="section-title">Dados de pagamento </span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="Num??ro do cartao"
                  className=" form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Validade"
                  className=" form-control form-control-lg"
                />
              </div>
              <div className="col-3  pl-0">
                <input
                  type="text"
                  placeholder="CVV"
                  className=" form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Nome do titular"
                  className=" form-control form-control-lg"
                />
              </div>
              <div className="col-6  pl-0">
                <input
                  type="text"
                  placeholder="CPF/CNPJ do titular"
                  className=" form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <b>total:</b>
                <h3>R$ 30,00</h3>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-block btn-lg btn-primary"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 products">
            <h4>Minha Sacola ({cart.length})</h4>
            <div className="box col mb-4 box-sidebar ">
              <div className="row ">
                {cart.map((p) => (
                  <Product product={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
