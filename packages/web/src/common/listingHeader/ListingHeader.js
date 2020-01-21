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
  height: 48px;
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

const Title = styled.h4`
  color: #4267b2;
  font-size: 16px;
  line-height: 13px;
  font-family: 'Open Sans', sans-serif;
`;

class ListingHeader extends React.Component {
  render() {
    const { title, isRecordSelected = false } = this.props;
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
          <StyledHeaderButton disabled={!isRecordSelected}>
            <StyledFontAwesomeIcon mr0="true" icon="pencil-alt" />
          </StyledHeaderButton>
          <StyledHeaderButton disabled={!isRecordSelected}>
            <StyledFontAwesomeIcon mr0="true" icon="envelope" />
          </StyledHeaderButton>
          <StyledHeaderButton disabled={!isRecordSelected}>
            <StyledFontAwesomeIcon mr0="true" icon="comment" />
          </StyledHeaderButton>
          <StyledHeaderButton disabled={!isRecordSelected}>
            <StyledFontAwesomeIcon mr0="true" icon="comments" />
          </StyledHeaderButton>
          <StyledHeaderButton disabled={!isRecordSelected}>
            <StyledFontAwesomeIcon mr0="true" icon="check-square" />
            <span className="caret"></span>
          </StyledHeaderButton>
          <StyledHeaderButton disabled={!isRecordSelected}>
            <StyledFontAwesomeIcon mr0="true" icon="edit" />
          </StyledHeaderButton>
          <StyledHeaderButton disabled={!isRecordSelected}>
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
  }
}

export default ListingHeader;
