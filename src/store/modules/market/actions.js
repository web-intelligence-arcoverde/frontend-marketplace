import Types from './types';

export function readMarketRequest(id) {
  return { type: Types.READ_MARKET_REQUEST, id };
}

export function readMarketSuccess(data) {
  return { type: Types.READ_MARKET_SUCCESS, data };
}
