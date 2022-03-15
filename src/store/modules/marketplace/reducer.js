import { produce } from 'immer';
import Types from './types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

function Shop(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.READ_MARKETPLACE_REQUEST: {
      return produce(state, (draft) => {
        draft.loading = true;
      });
    }
    case Types.READ_MARKETPLACE_SUCCESS: {
      return produce(state, (draft) => {
        draft.data = actions.data;
        draft.loading = false;
      });
    }

    default:
      return state;
  }
}
export default Shop;
