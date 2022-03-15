/* eslint-disable import/no-useless-path-segments */
import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';

import marketplace from './marketplace/reducer';

import market from './market/reducer';

export default combineReducers({
  auth,
  user,
  marketplace,
  market,
});
