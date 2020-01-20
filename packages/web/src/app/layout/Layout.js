import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';
import { matchPath, withRouter } from 'react-router-dom';
import { getIsAuthenticated } from 'bi-core/user/selectors';
import { authenticateUser } from 'bi-core/user/actions';
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

  renderWithNav = () => (
    <Container>
      <LeftNav />
      <MainPanel>{this.props.children}</MainPanel>
      <SnackBar />
    </Container>
  );

  render = () => {
    const isAuthenticationRoute = matchPath(this.props.location.pathname, routes.login);
    return isAuthenticationRoute ? this.renderWithOutNav() : this.renderWithNav();
  };
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
  authenticateUser: () => dispatch(authenticateUser()),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Layout);
