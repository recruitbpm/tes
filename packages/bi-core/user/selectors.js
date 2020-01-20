import { get } from 'lodash/fp';

export const getIsAuthenticated = get('user.isAuthenticated');
