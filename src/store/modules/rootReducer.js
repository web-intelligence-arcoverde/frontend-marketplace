/* eslint-disable import/no-useless-path-segments */
import { combineReducers } from 'redux';

import auth from './auth/reducer';

import marketplace from './marketplace/reducer';

import market from './market/reducer';

export default combineReducers({
  auth,
  marketplace,
  market,
});
