import {
  SAVE_DATA
} from '../actions/types.js';

const INITIAL_STATE = {
  user: {},
  
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return  Object.assign({}, state, {user: action.payload});

    default:
      return state;
  }
}
