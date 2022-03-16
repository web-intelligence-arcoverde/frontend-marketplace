/* eslint-disable import/prefer-default-export */
import { takeLatest, all, put } from 'redux-saga/effects';

import market from 'src/data/market.json';

import Types from './types';

import { readMarketListSuccess } from './actions';

export function* readMarkplace() {
  try {
    yield put(readMarketListSuccess(market));
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest(Types.READ_MARKETPLACE_REQUEST, readMarkplace)]);
