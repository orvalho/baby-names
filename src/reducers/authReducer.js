import {CHANGE_AUTH} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  name: null,
  email: null
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return {isSignedIn: action.payload.isSignedIn, name: action.payload.name, email: action.payload.email};
    default:
      return state;
  }
};
