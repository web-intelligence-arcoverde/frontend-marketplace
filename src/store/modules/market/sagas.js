/* eslint-disable import/prefer-default-export */
import { takeLatest, all, call, put } from 'redux-saga/effects';

import api from 'src/services/api';

import Types from './types';

import { readMarketSuccess } from './actions';

export function* getMarket({ id }) {
  try {
    const { data } = yield call(api.get, `/petshops/${id}`);
    yield put(readMarketSuccess(data.petshop));
  } catch (error) {
    console.log(error);
  }
}

export function* createMarket({ data }) {
  try {
    console.log(data);
    yield put(readMarketSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest(Types.READ_MARKET_REQUEST, getMarket)]);
