/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { toogleCartProduct } from '../../../store/modules/marketplace/actions';

import './style.css';

function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img src={product.capa} alt="fds" />
        </div>
        <div className="col-6 ">
          <h6>
            <label className="badge badge-primary">
              R$ {product.preco.toFixed(2)}
            </label>
          </h6>
          <small>
            <b>{product.nome}</b>
          </small>
        </div>
        <div className="col-3">
          <button
            type="button"
            onClick={() => dispatch(toogleCartProduct(product))}
            className="btn"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
