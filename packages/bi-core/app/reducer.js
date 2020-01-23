import { set, merge, get } from 'lodash/fp';
import {
  APP_BLUR,
  APP_FOCUS,
  APP_LOADED,
  APP_UNLOADED,
  APP_BOOTSTRAP_COMPLETE,
  NAVIGATION_TOGGLE_COLLAPSED,
} from './actions';

import { FETCH_CANDIDATES_REQUEST, FETCH_CANDIDATES_SUCCESS } from '../candidates/actions';
export const navigation = (state = { collapsed: false }, action) => {
  switch (action.type) {
    case NAVIGATION_TOGGLE_COLLAPSED:
      return set('collapsed', !state.collapsed, state);
    default:
      return state;
  }
};

export const app = (state = { bootstrapped: false }, action) => {
  switch (action.type) {
    case APP_BOOTSTRAP_COMPLETE:
      return set('bootstrapped', true, state);
    case APP_BLUR:
      return set('focused', false, state);
    case APP_FOCUS:
      return set('focused', true, state);
    case APP_UNLOADED:
      return set('unloaded', true, state);
    case APP_LOADED:
      return set('loaded', true, state);
    default:
      return state;
  }
};

export const lists = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CANDIDATES_REQUEST:
      return merge(state, {
        candidates: { _fetching: true },
      });

    case FETCH_CANDIDATES_SUCCESS:
      const totalElements = {
        candidates: {
          _fetching: false,
          page: get('page')(action),
          totalElements: get('totalElements')(action),
        },
      };
      return merge(state, totalElements);
    default:
      return state;
  }
};
