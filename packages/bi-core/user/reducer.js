import { set } from 'lodash/fp';
import { AUTHENTICATION_SUCCESS } from './actions';

export const user = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case AUTHENTICATION_SUCCESS:
      return set('isAuthenticated', true, state);

    default:
      return state;
  }
};
