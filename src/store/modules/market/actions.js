import Types from './types';

export function readMarketRequest() {
  return { type: Types.READ_MARKETS_REQUEST };
}

export function readMarketSuccess(data) {
  return { type: Types.READ_MARKETS_SUCCESS, data };
}

export function createMarketRequest(data) {
  return { type: Types.CREATE_MARKET_REQUEST, data };
}

export function createMarketSuccess(data) {
  return { type: Types.CREATE_MARKET_SUCCESS, data };
}

export function updateMarketRequest(data) {
  return { type: Types.UPDATE_MARKET_REQUEST, data };
}

export function updateMarketSuccess(data) {
  return { type: Types.UPDATE_MARKET_SUCCESS, data };
}

export function deleteMarketRequest(id) {
  return { type: Types.DELETE_MARKET_REQUEST, id };
}

export function deleteMarketSuccess(id) {
  return { type: Types.DELETE_MARKET_SUCCESS, id };
}
