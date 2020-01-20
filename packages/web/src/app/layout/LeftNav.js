import React from 'react';
import styled from 'styled-components';
import { HEADER_HEIGH_PX, LEFT_NAV_WIDTH_PX } from '../../common/dimensions';
import { Link, withRouter } from 'react-router-dom';

const LeftNavContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: ${LEFT_NAV_WIDTH_PX.large}px;
`;

const LogoContainer = styled.div`
  background: white;
  min-height: ${HEADER_HEIGH_PX.large}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavContainer = styled.div`
  height: calc(100vh - ${HEADER_HEIGH_PX.large}px);
  background: #1c274a;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px 0px;
  margin: 0;
  list-style: none;
  color: #ccc;
`;

const StyledIcon = styled.i`
  margin-right: 10px;
`;

const StyledListItem = styled.li`
  width: calc(100% - 16px);
  padding: 8px;
  font-size: 12px;
  line-height: 17px;
  cursor: pointer;

  :hover {
    background-color: orange;
    color: white;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
`;

const CopyRights = styled.div`
  width: calc(100% - 16px);
  padding: 8px;
  text-align: center;
  color: #999;
`;

const StyledLogo = styled.img`
  margin-left: 10px;
`;

const LeftNav = props => {
  return (
    <LeftNavContainer>
      <LogoContainer>
        <StyledLogo src="/images/tes-logo.png" alt="tes-logo.png" />
      </LogoContainer>
      <NavContainer>
        <StyledList>
          <StyledListItem>
            <StyledLink to="/">
              <StyledIcon className="fa fa-home"></StyledIcon> Dashboard
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">
              <StyledIcon className="icon-contacts"></StyledIcon> Client
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/candidates">
              <StyledIcon className="fa fa-users"></StyledIcon> Employees
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">
              <StyledIcon className="icon-vendor"></StyledIcon> Vendors
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">
              <StyledIcon className="fa fa-bullseye"></StyledIcon> Placements
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">
              <StyledIcon className="icon-onboarding"></StyledIcon> Onboarding
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">
              <StyledIcon className="icon-timesheet"></StyledIcon> Time Sheets
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">
              <StyledIcon className="icon-expense"></StyledIcon> Expenses
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">
              <StyledIcon className="icon-invoice"></StyledIcon> Invoices
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">
              <StyledIcon className="icon-task-finish"></StyledIcon> Tasks
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">
              <StyledIcon className="fa fa-user"></StyledIcon> Users
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">
              <StyledIcon className="fa fa-trash"></StyledIcon> Trash
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/">
              <StyledIcon className="fa fa-history"></StyledIcon> Log History
            </StyledLink>
          </StyledListItem>
        </StyledList>

        <CopyRights>© 2014 - 2020. All Rights Reserved. RecruitBPM</CopyRights>
      </NavContainer>
    </LeftNavContainer>
  );
};

export default withRouter(LeftNav);
