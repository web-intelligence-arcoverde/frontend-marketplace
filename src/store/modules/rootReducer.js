/* eslint-disable import/no-useless-path-segments */
import { combineReducers } from 'redux';
import shop from '../modules/shop/reducer';

import market from './market/reducer';

export default combineReducers({
  shop,
  market,
});
