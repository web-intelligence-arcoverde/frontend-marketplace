/* eslint-disable import/prefer-default-export */
import { takeLatest, all, call, put } from 'redux-saga/effects'
import Types from './types'
import api from '../../../services/api';
import { setPetshops,setPetshop } from './actions';


export function* requestPetshops(){
    const response = yield call(api.get ,'/petshops');
    const res = response.data;
    yield put(setPetshops(res))
}
export function* requestPetshop(payload){
    const response = yield call(api.get ,`/petshop${payload.id}`);
    const res = response.data;
    yield put(setPetshop(res.petshop));
}
 
export default all([
  takeLatest(Types.REQUEST_PETSHOPS, requestPetshops),
  takeLatest(Types.REQUEST_PETSHOP, requestPetshop),
]);