/* eslint-disable import/prefer-default-export */
import Types from "./types"

export function setCostumer(costumer){
  return { type:Types.SET_COSTUMER , costumer };
}
export function requestPetshops(){
  return { type:Types.REQUEST_PETSHOPS };
}
export function setPetshops(petshops){
  return { type:Types.SET_PETSHOPS,petshops};
}
export function setShopMapSelected(petshop){
  return { type:Types.SET_PETSHOP_MAP_SELECTED,petshop};
}
export function setMapCenter(location){
  return { type:Types.SET_MAP_CENTER,location};  
}
export function requestPetshop(id){ 
  return { type:Types.REQUEST_PETSHOP,id};  
}
export function setPetshop(petshop){ 
  return { type:Types.SET_PETSHOP,petshop};  
}
export function toogleCartProduct(product){ 
  return { type:Types.TOOGLE_CART_PRODUCT,product};  
}
