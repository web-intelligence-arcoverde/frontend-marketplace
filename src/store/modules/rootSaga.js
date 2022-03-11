import { all } from 'redux-saga/effects';
import shop from './shop/sagas';
import market from './market/sagas';

export default function* rootSaga() {
  return yield all({ shop, market });
}
