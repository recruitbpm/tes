export const SNACKBAR_OPEN = 'SNACKBAR/OPEN';
export const SNACKBAR_CLOSE = 'SNACKBAR/CLOSE';

export const IconTypes = {
  TICK: 'tick',
  INFO: 'info',
  ARROW_RIGHT: 'arrow_right',
};

const open = ({ title, message, leftIconType }) => ({
  type: SNACKBAR_OPEN,
  title,
  message,
  leftIconType,
});

export const close = () => ({
  type: SNACKBAR_CLOSE,
});

export const openNetworkSlowSnackBar = () => dispatch => {
  dispatch(open({ message: 'Network Slow. Loading ...', leftIconType: IconTypes.INFO }));
};
