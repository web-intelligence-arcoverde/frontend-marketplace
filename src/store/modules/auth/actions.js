import Types from './types';

export function signInRequest(data) {
  return { type: Types.SIGN_IN_REQUEST, data };
}

export function signInSuccess() {
  return { type: Types.SIGN_IN_SUCCESS };
}

export function signOutRequest(data) {
  return { type: Types.SIGN_OUT_REQUEST, data };
}

export function signOutSuccess() {
  return { type: Types.SIGN_OUT_SUCCESS };
}
