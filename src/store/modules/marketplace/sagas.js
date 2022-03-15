/* eslint-disable import/prefer-default-export */
import { takeLatest, all, call, put } from 'redux-saga/effects';
import Types from './types';
import api from '../../../services/api';

import { readMarketListSuccess } from './actions';

export function* readMarkplace() {
  try {
    const { data } = yield call(api.get, '/petshops');
    yield put(readMarketListSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest(Types.READ_MARKETPLACE_REQUEST, readMarkplace)]);
