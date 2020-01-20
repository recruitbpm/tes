export const APP_LOADED = 'APP_LOADED';
export const APP_UNLOADED = 'APP_UNLOADED';
export const APP_BLUR = 'APP_BLUR';
export const APP_FOCUS = 'APP_FOCUS';
export const APP_BOOTSTRAP_COMPLETE = 'APP_BOOTSTRAP_COMPLETE';

export const SAVE_SCROLL_OFFSET = 'SAVE_SCROLL_OFFSET';

export const appBootstrapComplete = () => dispatch => {
  dispatch({ type: APP_BOOTSTRAP_COMPLETE });
};

export const saveScrollPosition = () => dispatch => {
  dispatch({ type: SAVE_SCROLL_OFFSET });
};
