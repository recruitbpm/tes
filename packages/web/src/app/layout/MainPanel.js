import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HEADER_HEIGH_PX } from '../../common/dimensions';

const Container = styled.div`
  margin-left: 200px;
`;

const HeaderBar = styled.div`
  position: fixed;
  left: 200px;
  top: 0;
  width: calc(100% - 200px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 52px;
  color: #8f939e;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.08);
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

const ToggleLeftNavButton = styled.a`
  display: flex;
  width: ${HEADER_HEIGH_PX.large}px;
  height: ${HEADER_HEIGH_PX.large}px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    color: #1d2939;
    background-color: #f7f7f7;
  }
`;

const AddButton = styled.a`
  display: flex;
  height: ${HEADER_HEIGH_PX.large}px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  :hover {
    color: #1d2939;
    background-color: #f7f7f7;
  }
`;

const SearchButton = styled.a`
  display: flex;
  height: ${HEADER_HEIGH_PX.large}px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  :hover {
    color: #1d2939;
    background-color: #f7f7f7;
  }
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
  padding-top: 52px;
`;

export default ({ children }) => {
  return (
    <Container>
      <HeaderBar>
        <HeaderLeft>
          <ToggleLeftNavButton>
            <FontAwesomeIcon icon="bars" size="lg" />
          </ToggleLeftNavButton>
          <AddButton>
            <StyledFontAwesomeIcon icon="plus" size="sm" /> New
          </AddButton>
          <SearchButton>
            <StyledFontAwesomeIcon icon="search" size="sm" /> Search
          </SearchButton>
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
