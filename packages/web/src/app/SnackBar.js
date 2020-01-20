import React from 'react';
import { connect } from 'react-redux';
import { close, IconTypes } from 'bi-core/snackBar/actions';
import { getSnackBar } from 'bi-core/snackBar/selectors';
import styled from 'styled-components';
import { posFixedZIndex } from '../common/dimensions';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  color: black;
  z-index: ${posFixedZIndex.snackBar};
  display: flex;
  align-items: center;
  padding: 20px 0;
`;

const LeftIcon = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`;

const Message = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
`;

const getIcon = type => {
  switch (type) {
    case IconTypes.INFO:
      return 'INFO: ';
    default:
      return null;
  }
};

const SnackBar = ({ visible, title, message, closeSnackBar, leftIconType, closeIconType }) => {
  if (!visible) {
    return null;
  }
  return (
    <Container>
      <LeftIcon>{getIcon(leftIconType)}</LeftIcon>
      <div>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </div>
    </Container>
  );
};

const mapStateToProps = getSnackBar;

const mapDispatchToProps = dispatch => ({
  closeSnackBar: () => dispatch(close()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackBar);
