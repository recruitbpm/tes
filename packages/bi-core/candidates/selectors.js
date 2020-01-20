import { get, values } from 'lodash/fp';

export const getCandidates = state => () => values(get('candidates.listing')(state));
