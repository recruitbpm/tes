// Take care when using this component ensuring that
// more than 1 does not end up on the DOM at the same time.
import React from 'react';
import { connect } from 'react-redux';
import { openNetworkSlowSnackBar, close } from 'bi-core/snackBar/actions';

const LoadingDelay = 750;
const SnackDelay = 4000;

class NetworkSlowBase extends React.Component {
  snackDelayTimer = null;
  snackOpened = false;

  componentDidUpdate({ prevPastDelay }) {
    if (this.props.pastDelay && !prevPastDelay) {
      this.snackDelayTimer = setTimeout(() => {
        this.snackOpened = true;
        this.props.openNetworkSlowSnackBar();
      }, SnackDelay);
    }
  }

  componentWillUnmount() {
    if (this.snackDelayTimer) {
      clearTimeout(this.snackDelayTimer);
      this.snackDelayTimer = null;
    }
    if (this.snackOpened) {
      this.props.closeSnack();
    }
  }

  render() {
    return null;
  }
}

const NetworkSlow = connect(
  null,
  dispatch => ({
    openNetworkSlowSnackBar: () => dispatch(openNetworkSlowSnackBar()),
    closeSnack: () => dispatch(close()),
  })
)(NetworkSlowBase);

export default NetworkSlow;

export const LoadableProps = {
  loading: NetworkSlow,
  delay: LoadingDelay,
};
