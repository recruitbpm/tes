import { keyBy, merge } from 'lodash/fp';
import { FETCH_CANDIDATES_SUCCESS } from './actions';

export const candidates = (state = { listing: {} }, action) => {
  switch (action.type) {
    case FETCH_CANDIDATES_SUCCESS:
      const candidates = transformApiResposneForListing(action.candidates);

      return merge(state, {
        listing: candidates,
      });
    default:
      return state;
  }
};

const transformApiResposneForListing = candidates => {
  return keyBy(candidate => {
    return `candidate-${candidate.candidate_id}`;
  })(candidates);
};
