import React from 'react';
import { connect } from 'react-redux';
import { appBootstrapComplete } from '../actions';

class Bootstrap extends React.Component {
  componentDidMount = () => {
    const { appBootstrapComplete } = this.props;
    appBootstrapComplete();
  };

  render = () => {
    const { children } = this.props;
    return <React.Fragment>{children}</React.Fragment>;
  };
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  appBootstrapComplete: () => dispatch(appBootstrapComplete()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bootstrap);
