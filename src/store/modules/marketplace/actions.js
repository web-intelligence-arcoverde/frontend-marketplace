/* eslint-disable import/prefer-default-export */
import Types from './types';

export function readMarketListRequest() {
  return { type: Types.READ_MARKETPLACE_REQUEST };
}
export function readMarketListSuccess(data) {
  return { type: Types.READ_MARKETPLACE_SUCCESS, data };
}
