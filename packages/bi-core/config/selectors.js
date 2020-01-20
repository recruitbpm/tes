import { get } from 'lodash/fp';

/*
    User Selectors
*/
export const getUserName = state => get('config.username')(state);
export const getEmail = state => get('config.email')(state);
export const getUserId = state => get('config.userId')(state);
export const getUserAccountId = state => get('config.userAccountId')(state);

/*
    Api Selectors
*/
export const getApiRoot = state => get('config.apiRoot')(state);
export const getAccessToken = state => get('user.accessToken')(state);
export const getTestingToken = state => get('config.testingToken')(state);

/*
    Util selectors
*/
export const getConsoleLogFetch = state => get('config.consoleLogFetch')(state);
