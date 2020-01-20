import { get } from 'lodash/fp';
import { endPoints, endPointHostGrouping } from './endPoints';

export const getEndPointUrl = state => (endPointLabel, params = {}) => {
  const pathname = endPoints[endPointLabel]({ ...params });
  if (!pathname) {
    return console.error('End point not found: ' + endPointLabel);
  }
  let hostLabel;
  for (let key in endPointHostGrouping) {
    if (endPointHostGrouping[key].indexOf(endPointLabel) > -1) {
      hostLabel = key;
      break;
    }
  }
  if (!hostLabel) {
    return console.error('Host label not found for: ' + endPointLabel);
  }
  const host = get(`config.api${hostLabel}Root`, state);
  return `${host}${pathname}`;
};

export const getPage = id => state => get(`lists.${id}.page`)(state);
export const getFetching = id => state => get(`lists.${id}._fetching`)(state);
export const getTotalElements = id => get(`lists.${id}.totalElements`);
export const getScrollOffset = id => () => null;
