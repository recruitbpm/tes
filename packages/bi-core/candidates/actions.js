import { get } from 'lodash/fp';
import { getEndPointUrl as ep } from '../app/selectors';
import { fetch } from '../fetchMiddleware';

export const FETCH_CANDIDATES_REQUEST = 'FETCH_CANDIDATES_REQUEST';
export const FETCH_CANDIDATES_SUCCESS = 'FETCH_CANDIDATES_SUCCESS';
export const FETCH_CANDIDATES_FAILURE = 'FETCH_CANDIDATES_FAILURE';

export const fetchCandidates = (requestId, pagination) => async (dispatch, getState) => {
  console.log(pagination);

  const state = getState();

  let paginationQueryParams = '';
  let endPoint = ep(state)('fetchCandidates');

  if (pagination.page) {
    paginationQueryParams = Object.keys(pagination)
      .map(k => `${k}=${pagination[k]}`)
      .join('&');

    endPoint = `${endPoint}?${paginationQueryParams}`;
  }

  const fetchCandidatesRequest = fetch(`${endPoint}`);

  dispatch({ type: FETCH_CANDIDATES_REQUEST });

  const { data } = await dispatch(fetchCandidatesRequest);

  const candidates = get('_embedded.candidates')(data);
  const totalElements = get('total_items')(data);
  const page = get('page')(data);

  dispatch({ type: FETCH_CANDIDATES_SUCCESS, candidates, totalElements, page });
};
