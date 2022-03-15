/* eslint-disable import/prefer-default-export */
import Types from './types';

export function setCostumer(costumer) {
  return { type: Types.SET_COSTUMER, costumer };
}
export function requestPetshops() {
  return { type: Types.REQUEST_PETSHOPS };
}
