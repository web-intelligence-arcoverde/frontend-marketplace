/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
/* eslint-disable spaced-comment */
import { produce } from "immer";
import Types from "./types";

const INITIAL_STATE = {
  customer:{},
  petshops:[],
  petshop:{},
  petshopMapSelected:null, 
  mapCenter:{
    lat: -23.561684,
    lng: -46.625378,
  },
  cart:[],
};

function Shop( state = INITIAL_STATE, actions) {
  switch(actions.type) {
     case Types.SET_COSTUMER: {
     return produce(state ,(draft) => { 
        draft.customer = actions.customer;
     });
    }
     case Types.SET_PETSHOPS : {
     return produce(state ,(draft) => { 
        draft.petshops = actions.petshops;
     });
    } 
     case Types.SET_PETSHOP_MAP_SELECTED : {
     return produce(state ,(draft) => { 
        draft.petshopMapSelected = actions.petshop;
     });
    } 
     case Types.SET_MAP_CENTER : {
     return produce(state ,(draft) => { 
        draft.mapCenter = actions.location;
     });
    } 
     case Types.SET_PETSHOP : {
     return produce(state ,(draft) => { 
        draft.petshop = actions.petshop;
     });
    } 
     case Types.TOOGLE_CART_PRODUCT : {
     return produce(state ,(draft) => { 
        const index = draft.cart.findIndex((p)=> p._id === actions.product_id)
        if (index !== -1){
          draft.cart.splice(index,1)
        }else{
          draft.cart.push(actions.product)
        }

     });
    } 
     default:
       return state;
  }   
 }
 export default Shop;