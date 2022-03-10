/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
/* eslint-disable spaced-comment */

import { produce } from 'immer';
import Types from './types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  market: {},
};

function Market(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case Types.READ_MARKETS_REQUEST: {
      return produce(state, (draft) => {
        draft.loading = true;
      });
    }

    case Types.READ_MARKETS_SUCCESS: {
      return produce(state, (draft) => {
        draft.data = actions.data;
        draft.loading = false;
      });
    }

    case Types.CREATE_MARKET_SUCCESS: {
      return produce(state, (draft) => {
        draft.data = [...state.data, actions.data];
      });
    }

    default:
      return state;
  }
}
export default Market;
