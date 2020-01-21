import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderButton } from '../buttons/buttons';

const StyledHeaderButton = styled(HeaderButton)`
  margin-right: 5px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${props => (props.mr0 ? '' : 'margin-right: 10px')}
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 35px;
  padding: 5px 5px 5px 20px;
  background: #f5f6f7;
  align-items: center;

  span.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 10px;
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }
`;

const ButtonsContainer = styled.div`
  margin-left: auto;
`;

const Title = styled.h2`
  color: #4267b2;
  font-size: 16px;
  line-height: 13px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
`;

const CandidateSearchToolbarContainer = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #dddfe2;
  border-top: 1px solid #dddfe2;
  border-left: none;
  border-right: none;
`;

const CandidateSearchToolbarButton = styled.div`
  background-color: #fff;
  padding: 6px 10px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  font-size: 13px;

  &.active {
    background-color: #f5f6f7;
  }
`;

const CandidatesListingHeader = ({ title, isRowSelected = false }) => {
  return (
    <HeaderContainer>
      <Title>
        <StyledFontAwesomeIcon icon="users" />
        {title}
      </Title>
      <ButtonsContainer>
        <StyledHeaderButton>
          <StyledFontAwesomeIcon mr0="true" icon="download" />
        </StyledHeaderButton>
        <StyledHeaderButton>
          <StyledFontAwesomeIcon mr0="true" icon="bell" />
        </StyledHeaderButton>
        <StyledHeaderButton>
          <StyledFontAwesomeIcon mr0="true" icon="plus" />
        </StyledHeaderButton>
        <StyledHeaderButton disabled={!isRowSelected}>
          <StyledFontAwesomeIcon mr0="true" icon="pencil-alt" />
        </StyledHeaderButton>
        <StyledHeaderButton disabled={!isRowSelected}>
          <StyledFontAwesomeIcon mr0="true" icon="envelope" />
        </StyledHeaderButton>
        <StyledHeaderButton disabled={!isRowSelected}>
          <StyledFontAwesomeIcon mr0="true" icon="comment" />
        </StyledHeaderButton>
        <StyledHeaderButton disabled={!isRowSelected}>
          <StyledFontAwesomeIcon mr0="true" icon="comments" />
        </StyledHeaderButton>
        <StyledHeaderButton disabled={!isRowSelected}>
          <StyledFontAwesomeIcon mr0="true" icon="check-square" />
          <span className="caret"></span>
        </StyledHeaderButton>
        <StyledHeaderButton disabled={!isRowSelected}>
          <StyledFontAwesomeIcon mr0="true" icon="edit" />
        </StyledHeaderButton>
        <StyledHeaderButton disabled={!isRowSelected}>
          <StyledFontAwesomeIcon mr0="true" icon="trash-alt" />
        </StyledHeaderButton>
        <StyledHeaderButton>
          <StyledFontAwesomeIcon mr0="true" icon="fire-alt" />
        </StyledHeaderButton>
        <StyledHeaderButton>
          <StyledFontAwesomeIcon mr0="true" icon="thumbtack" />
        </StyledHeaderButton>
        <StyledHeaderButton>
          <StyledFontAwesomeIcon mr0="true" icon="tag" />
        </StyledHeaderButton>
        <StyledHeaderButton>
          <StyledFontAwesomeIcon mr0="true" icon="share-square" />
        </StyledHeaderButton>
        <StyledHeaderButton>
          <StyledFontAwesomeIcon mr0="true" icon="filter" />
          <span className="caret"></span>
        </StyledHeaderButton>
        <StyledHeaderButton>
          <StyledFontAwesomeIcon mr0="true" icon="columns" />
        </StyledHeaderButton>
        <StyledHeaderButton>
          <StyledFontAwesomeIcon mr0="true" icon="sync" />
        </StyledHeaderButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export const CandidateSearchToolbar = ({ module = 'recruitbpm', onTypeChange }) => {
  const StyledIcon = styled.i`
    margin-right: 5px;
    color: rgba(0, 0, 0, 0.65);
  `;

  const getActiveClassName = type => {
    return type === module ? 'active' : '';
  };

  return (
    <CandidateSearchToolbarContainer>
      <CandidateSearchToolbarButton
        onClick={() => onTypeChange('recruitbpm')}
        className={getActiveClassName('recruitbpm')}
      >
        RecruitBPM
      </CandidateSearchToolbarButton>
      <CandidateSearchToolbarButton
        onClick={() => onTypeChange('indeed')}
        className={getActiveClassName('indeed')}
      >
        <StyledIcon className="icon-indeed"></StyledIcon>Indeed
      </CandidateSearchToolbarButton>
      <CandidateSearchToolbarButton
        onClick={() => onTypeChange('resume_library')}
        className={getActiveClassName('resume_library')}
      >
        <StyledIcon className="icon-resume-library"></StyledIcon>Resume Library
      </CandidateSearchToolbarButton>
      <CandidateSearchToolbarButton
        onClick={() => onTypeChange('dice')}
        className={getActiveClassName('dice')}
      >
        <StyledIcon className="icon-dice"></StyledIcon>Dice
      </CandidateSearchToolbarButton>
      <CandidateSearchToolbarButton
        onClick={() => onTypeChange('nexxt')}
        className={getActiveClassName('nexxt')}
      >
        <StyledIcon className="icon-nexxt"></StyledIcon>Nexxt
      </CandidateSearchToolbarButton>
    </CandidateSearchToolbarContainer>
  );
};

const ListingHeader = ({ module = 'candidates', ...props }) => {
  switch (module) {
    case 'candidates':
      return (
        <React.Fragment>
          <CandidatesListingHeader {...props}></CandidatesListingHeader>
        </React.Fragment>
      );
    default:
      return null;
  }
};

export default ListingHeader;
