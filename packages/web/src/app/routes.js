export default ({ paramStyle = 'web' } = {}) => {
  const createParam = param => {
    if (paramStyle === 'web') {
      return `:${param}`;
    } else if (paramStyle === 'node') {
      return `{${param}}`;
    } else {
      throw new Error('Unkown route param style');
    }
  };

  return {
    dashboard: {
      path: '/',
    },
    login: {
      path: '/login',
    },
    candidates: {
      path: '/candidates',
    },
    candidateDetails: {
      path: `/candidates/${createParam('candidateId')}`,
    },
  };
};
