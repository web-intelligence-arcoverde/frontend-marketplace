/* eslint-disable import/prefer-default-export */
import { takeLatest, all, call, put } from 'redux-saga/effects';
import Types from './types';
import api from '../../../services/api';
import { readMarketSuccess, createMarketSuccess } from './actions';

export function* getMarket() {
  const response = yield call(api.get, '/petshops');
  const res = response.data;
  yield put(readMarketSuccess(res));
}

export function* createMarket({ data }) {
  try {
    console.log(data);
    yield put(createMarketSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(Types.READ_MARKETS_REQUEST, getMarket),
  takeLatest(Types.CREATE_MARKET_REQUEST, createMarket),
]);
