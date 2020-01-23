import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';
import { matchPath, withRouter } from 'react-router-dom';
import { getIsAuthenticated } from 'bi-core/user/selectors';
import { authenticateUser } from 'bi-core/user/actions';
import { toggleNavigationCollapsedState } from 'bi-core/app/actions';
import { getIsNavigationCollapsed } from 'bi-core/app/selectors';
import SnackBar from '../SnackBar';
import MainPanel from './MainPanel';
import LeftNav from './LeftNav';
import { routes } from '../../App';

const Container = styled.div``;

class Layout extends React.Component {
  componentDidMount = () => {
    const { authenticateUser } = this.props;
    authenticateUser();
  };

  renderWithOutNav = () => (
    <Container>
      {this.props.children}
      <SnackBar />
    </Container>
  );

  renderWithNav = () => {
    const { toggleNavigationCollapsedState, isNavigationCollapsed } = this.props;

    return (
      <Container>
        <LeftNav isNavigationCollapsed={isNavigationCollapsed} />
        <MainPanel
          onToggleNavigationClick={toggleNavigationCollapsedState}
          isNavigationCollapsed={isNavigationCollapsed}
        >
          {this.props.children}
        </MainPanel>
        <SnackBar />
      </Container>
    );
  };

  render = () => {
    const isAuthenticationRoute = matchPath(this.props.location.pathname, routes.login);
    return isAuthenticationRoute ? this.renderWithOutNav() : this.renderWithNav();
  };
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  isNavigationCollapsed: getIsNavigationCollapsed()(state),
});

const mapDispatchToProps = dispatch => ({
  authenticateUser: () => dispatch(authenticateUser()),
  toggleNavigationCollapsedState: () => dispatch(toggleNavigationCollapsedState()),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Layout);
