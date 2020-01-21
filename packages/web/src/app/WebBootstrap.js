import React from 'react';
import { connect } from 'react-redux';
import Bootstrap from 'bi-core/app/bootstrap/Bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

class WebBootstrap extends React.Component {
  constructor(props) {
    super(props);
    library.add(fab, fas, far);
  }

  render = () => {
    const { children } = this.props;
    return <Bootstrap>{children}</Bootstrap>;
  };
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WebBootstrap);
