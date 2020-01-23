import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HEADER_HEIGH_PX } from '../../common/dimensions';

const Container = styled.div`
  margin-left: ${({ isNavigationCollapsed }) => (!isNavigationCollapsed ? '200' : '45')}px;
`;

const HeaderBar = styled.div`
  position: fixed;
  left: ${({ isNavigationCollapsed }) => (!isNavigationCollapsed ? '200' : '0')}px;
  top: 0;
  width: calc(100% - 200px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: ${HEADER_HEIGH_PX.large}px;
  color: rgba(0, 0, 0, 0.65);
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.04);
  margin-bottom: 4px;
  z-index: 999;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const HeaderRight = styled.div`
  display: flex;
  margin-left: auto;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const AccountTypeLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${HEADER_HEIGH_PX.large}px;
  margin: 0 10px 0 0;
`;
const AccountTypeLabel = styled.span`
  color: white;
  background-color: orange;
  line-height: 1;
  font-size: 12px;
  padding: 4px 7px;
  border-radius: 20px;
  letter-spacing: 0 px;
`;

const NotificationButton = styled.a`
  display: flex;
  height: ${HEADER_HEIGH_PX.large}px;
  width: ${HEADER_HEIGH_PX.large}px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: #1d2939;
    background-color: #f7f7f7;
  }
`;

const HelpButton = styled.a`
  display: flex;
  height: ${HEADER_HEIGH_PX.large}px;
  width: ${HEADER_HEIGH_PX.large}px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: #1d2939;
    background-color: #f7f7f7;
  }
`;

const ProfileButton = styled.a`
  display: flex;
  height: ${HEADER_HEIGH_PX.large}px;
  width: ${HEADER_HEIGH_PX.large}px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: #1d2939;
    background-color: #f7f7f7;
  }
`;

const StyledProfileImage = styled.img`
  width: 25px;
`;

const ChildrenContainer = styled.div`
  padding-top: ${HEADER_HEIGH_PX.large}px;
`;

const HeaderLeftButton = styled.a`
  display: flex;
  height: ${HEADER_HEIGH_PX.large}px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 8px;
  :hover {
    color: #1d2939;
    background-color: #f7f7f7;
  }
`;

export default ({ children, onToggleNavigationClick = null, isNavigationCollapsed = false }) => {
  return (
    <Container isNavigationCollapsed={isNavigationCollapsed}>
      <HeaderBar isNavigationCollapsed={isNavigationCollapsed}>
        <HeaderLeft>
          <HeaderLeftButton
            style={{ padding: '0 13px', fontSize: 15 }}
            onClick={onToggleNavigationClick && onToggleNavigationClick}
          >
            <FontAwesomeIcon icon="bars" size="lg" />
          </HeaderLeftButton>
          <HeaderLeftButton>
            <StyledFontAwesomeIcon icon="plus" size="lg" /> New
          </HeaderLeftButton>
          <HeaderLeftButton>
            <StyledFontAwesomeIcon icon="search" size="lg" /> Search
          </HeaderLeftButton>
          <HeaderLeftButton>
            <StyledFontAwesomeIcon icon="search-plus" size="lg" /> Advance Search
          </HeaderLeftButton>
          <HeaderLeftButton>
            <StyledFontAwesomeIcon icon={['fab', 'linkedin']} size="lg" /> LinkedIn Search
          </HeaderLeftButton>
          <HeaderLeftButton>
            <StyledFontAwesomeIcon icon="search-plus" size="lg" /> Searches
          </HeaderLeftButton>
        </HeaderLeft>

        <HeaderRight>
          <AccountTypeLabelContainer>
            <AccountTypeLabel>
              <StyledFontAwesomeIcon icon="star" />
              Premium
            </AccountTypeLabel>
          </AccountTypeLabelContainer>
          <NotificationButton>
            <FontAwesomeIcon icon="bell" size="lg" />
          </NotificationButton>
          <HelpButton>
            <FontAwesomeIcon icon="question-circle" size="lg" />
          </HelpButton>
          <ProfileButton>
            <StyledProfileImage src="/images/profile-img.jpg" alt="profile-img.jpg" />
          </ProfileButton>
        </HeaderRight>
      </HeaderBar>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};
