// eslint-disable-next-line no-unused-vars

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCostumer as setStoreCostumer } from '../../store/modules/shop/actions';
import Header from '../../components/header';
import illustration from '../../assets/svg/illustration.svg';

function cadastro() {
  const dispatch = useDispatch();
  const [costumer, setCostumer] = useState({
    exeternal_id: new Date().getTime().toString(),
    name: '',
    type: 'individual',
    country: 'br',
    email: '',
    documents: [
      {
        type: 'cpf',
        number: '',
      },
    ],
    phone_numbers: '',
    birthday: '',
  });
  const goToCheckout = () => {
    dispatch(setStoreCostumer(costumer));
  };

  return (
    <div className="container-fluid h-100 bg-primary">
      <div className="row">
        <Header WhiteVersion hideCart />
        <div className="col-6 my-auto text-center">
          <img src={illustration} className="img-fluid" alt="sfdsf" />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">
              Falta pouco para fazer o seu pet ser feliz.
            </h2>
            <br />
            <br />
            <form>
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="NOME COMPLETO"
                onChange={(e) => {
                  setCostumer({ ...costumer, name: e.target.value });
                }}
              />
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="E-mail"
                onChange={(e) => {
                  setCostumer({ ...costumer, email: e.target.value });
                }}
              />
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="Telefone"
                onChange={(e) => {
                  setCostumer({ ...costumer, phone_numbers: [e.target.value] });
                }}
              />
              <input
                type="text"
                className="form-control form-control-lg mb-3"
                placeholder="CPF"
                onChange={(e) => {
                  setCostumer({
                    ...costumer,
                    documents: [
                      {
                        type: 'cpf',
                        number: e.target.value,
                      },
                    ],
                  });
                }}
              />
              <input
                type="date"
                className="form-control form-control-lg mb-3"
                placeholder="Data De Nascimento"
                onChange={(e) => {
                  setCostumer({ ...costumer, birthday: e.target.value });
                }}
              />
              <button
                type="button"
                onClick={() => {
                  goToCheckout();
                }}
                className="btn btn-lg btn-block btn-secondary"
              >
                Finalizar pedido
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cadastro;
