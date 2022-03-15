import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

import marketplace from './marketplace/sagas';

export default function* rootSaga() {
  return yield all({ auth, marketplace });
}
