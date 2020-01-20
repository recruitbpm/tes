import { get, merge, noop } from 'lodash/fp';
import axios from 'axios';
import appendQueryParameter from './utils/appendQueryParameters';

import { getConsoleLogFetch, getAccessToken, getTestingToken, getUserAccountId, getUserId } from './config/selectors';

const FETCH = 'middleware/FETCH';

const log = process.env.NODE_ENV === 'development' ? console.log : noop;

export default ({ onError }) => ({ dispatch, getState }) => {
  const setAuthHeader = (headers = {}, testingTokenFallback = false) => {
    const accessToken = getAccessToken(getState());
    const testingToken = testingTokenFallback ? getTestingToken(getState()) : null;
    if (accessToken || testingToken) {
      headers['Authorization'] = `Bearer ${accessToken || testingToken}`;
    }
    return headers;
  };

  const refreshTokenIfNeeded = () => Promise.resolve();

  const isTokenInvalid = () => true;

  const invalidTokenAction = () => Promise.resolve();

  const isSignInCodeInvalid = () => false;

  return next => async action => {
    if (!action) {
      return;
    }

    if (action && action.type !== FETCH) {
      return next(action);
    }

    const state = getState();

    const endPoint = action.url;
    const uri = appendQueryParameter(endPoint, [
      `account_id=${getUserAccountId(state)}`,
      `user_id=${getUserId(state)}`,
    ]);

    const consoleLogging = getConsoleLogFetch(state);
    if (consoleLogging) {
      log('fetching', `${endPoint}`, action.params);
    }

    const getParams = () => {
      const defaultParams = {
        method: 'get',
        headers: {
          ...setAuthHeader({}, get('config.testingTokenFallback')(state)),
        },
      };
      return merge(defaultParams, action.params);
    };

    return refreshTokenIfNeeded(action, getParams().headers)
      .then(() => axios(uri, getParams()))
      .catch(async error => {
        const request = error.config;

        if (isTokenInvalid(error)) {
          const refreshed = await invalidTokenAction();
          if (refreshed === true) {
            setAuthHeader(request.headers);
            return axios(request);
          }
        } else if (isSignInCodeInvalid(error)) {
        } else {
          throw error;
        }
      })
      .catch(async error => {
        const status = get('response.status', error);
        const body = get('response.data', error);
        const message = error.message;
        const messageId = Math.round(Math.random() * 100000);
        const params = getParams();
        const logMessage = `API failure: id: ${messageId} ${uri} (error ${status}, ${message}) params: ${JSON.stringify(
          params
        )}, body: ${JSON.stringify(body)}`;

        console.error(logMessage);
        if (onError) {
          dispatch(onError(logMessage));
        }
      })
      .then(response => (consoleLogging && log(action.url, response)) || response);
  };
};

export const fetch = (url, params = {}) => {
  return {
    type: FETCH,
    url,
    params: {
      ...params,
    },
  };
};
