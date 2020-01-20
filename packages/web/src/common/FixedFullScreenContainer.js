import React from 'react';
import styled, { css } from 'styled-components';
import { posFixedZIndex, ContainerTransition, CoreDevices, NAVBAR_HEIGHT_PX, TOOLBAR_HEIGHT_PX } from './dimensions';

const ContainerCss = css`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  z-index: ${posFixedZIndex.fullSreenContainer};
`;

const FixedFullScreenContainer = styled.div`
  ${ContainerCss};
  transition: ${ContainerTransition};
  opacity: ${({ opacity = 1 }) => opacity};
  ${({ fixedToolbarVisible }) =>
    fixedToolbarVisible
      ? `
    @media ${CoreDevices.tiny} {
      top: ${TOOLBAR_HEIGHT_PX.tiny}px;
      height: calc(100% - ${TOOLBAR_HEIGHT_PX.tiny}px);
    }

    @media ${CoreDevices.small} {
      top: ${TOOLBAR_HEIGHT_PX.small}px;
      height: calc(100% - ${TOOLBAR_HEIGHT_PX.small}px);
    }

    @media ${CoreDevices.medium} {
      top: ${TOOLBAR_HEIGHT_PX.medium}px;
      height: calc(100% - ${TOOLBAR_HEIGHT_PX.medium}px);
    }

    @media ${CoreDevices.large} {
      top: ${TOOLBAR_HEIGHT_PX.large}px;
      height: calc(100% - ${TOOLBAR_HEIGHT_PX.large}px);
    }
  `
      : ''};
`;

export default FixedFullScreenContainer;

export const FixedFullScreenContainerWithNav = styled(FixedFullScreenContainer)`
  @media ${CoreDevices.tiny} {
    bottom: ${NAVBAR_HEIGHT_PX.tiny}px;
    height: calc(100% - ${NAVBAR_HEIGHT_PX.tiny}px);
  }

  @media ${CoreDevices.small} {
    bottom: ${NAVBAR_HEIGHT_PX.small}px;
    height: calc(100% - ${NAVBAR_HEIGHT_PX.small}px);
  }

  @media ${CoreDevices.medium} {
    bottom: ${NAVBAR_HEIGHT_PX.medium}px;
    height: calc(100% - ${NAVBAR_HEIGHT_PX.medium}px);
  }

  @media ${CoreDevices.large} {
    top: ${NAVBAR_HEIGHT_PX.large}px;
    height: calc(100% - ${NAVBAR_HEIGHT_PX.large}px);
  }
`;

export const FixedFullScreenContainerWithNavWithToolbar = styled.div`
  ${ContainerCss};
  @media ${CoreDevices.tiny} {
    top: ${TOOLBAR_HEIGHT_PX.tiny}px;
    height: calc(100% - ${TOOLBAR_HEIGHT_PX.tiny + NAVBAR_HEIGHT_PX.tiny}px);
  }

  @media ${CoreDevices.small} {
    top: ${TOOLBAR_HEIGHT_PX.small}px;
    height: calc(100% - ${TOOLBAR_HEIGHT_PX.small + NAVBAR_HEIGHT_PX.small}px);
  }

  @media ${CoreDevices.medium} {
    top: ${TOOLBAR_HEIGHT_PX.medium}px;
    height: calc(100% - ${TOOLBAR_HEIGHT_PX.medium + NAVBAR_HEIGHT_PX.medium}px);
  }

  @media ${CoreDevices.large} {
    top: ${NAVBAR_HEIGHT_PX.large}px;
    height: calc(100% - ${NAVBAR_HEIGHT_PX.large}px);
  }
`;

export class FixedFullScreenContainerAnimated extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 0,
    };
  }

  show = () => this.setState({ opacity: 1 });

  componentWillUnmount = () =>
    this.containerShowTimer && clearTimeout(this.containerShowTimer) ? (this.containerShowTimer = null) : null;

  containerShowTimer = null;

  setContainerRef = ref => {
    if (ref && !this.container) {
      this.container = ref;
      this.containerShowTimer = setTimeout(() => this.show());
    }
  };

  render() {
    const { className, navBarVisible, fixedToolbarVisible, id } = this.props;
    const { opacity } = this.state;
    return navBarVisible ? (
      <FixedFullScreenContainerWithNav
        className={className}
        ref={ref => this.setContainerRef(ref)}
        opacity={opacity}
        id={id}
      >
        {this.props.children}
      </FixedFullScreenContainerWithNav>
    ) : (
      <FixedFullScreenContainer
        fixedToolbarVisible={fixedToolbarVisible}
        className={className}
        ref={ref => this.setContainerRef(ref)}
        opacity={opacity}
        id={id}
      >
        {this.props.children}
      </FixedFullScreenContainer>
    );
  }
}
