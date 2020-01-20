export const HostLabels = {
  GLOBAL: 'Global',
  CANDIDATES: 'Candidates',
};

export const endPointHostGrouping = {
  [HostLabels.CANDIDATES]: ['fetchCandidates', 'fetchCandidateDetails'],
};

export const endPoints = {
  //Content & Platform
  fetchCandidates: () => '/candidates',
  fetchCandidateDetails: ({ candidateId }) => `/candidates/${candidateId}`,
};
