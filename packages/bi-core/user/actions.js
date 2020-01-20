export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';

export const authenticateUser = () => async (dispatch, getState) => {
  dispatch({ type: AUTHENTICATION_SUCCESS });
};
