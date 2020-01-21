import React from 'react';
import { compose } from 'lodash/fp';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchCandidates } from 'bi-core/candidates/actions';
import { getCandidates } from 'bi-core/candidates/selectors';
import withRequest from 'bi-core/withRequest';
import DataTable from 'react-data-table-component';
import ListingHeader from '../common/listingHeader';
import { CandidateSearchToolbar } from '../common/listingHeader';
import ProgressIndicator from '../common/progressIndicator';
import { InputField } from '../common/formElements/input';

const StyledIcon = styled.i``;
const StyledRingCenteralButton = styled.a`
  color: white;
  padding: 1px 3px;
  line-height: 1;
  font-size: 13px;
  border-radius: 3px;
  cursor: pointer;

  ${props => (props.row.phone_direct !== '' ? 'background: orange;' : 'background: #dddfe2;')}
`;
const columns = [
  {
    name: <FontAwesomeIcon icon="ellipsis-v" style={{ color: 'rgba(0,0,0,0.6)' }} />,
    cell: () => <FontAwesomeIcon icon="ellipsis-v" style={{ color: '#0070D2' }} />,
    maxWidth: '10px',
    minWidth: '10px',
    center: true,
    compact: true,
  },
  {
    name: <StyledIcon className="icon-binoculars" style={{ color: 'rgba(0,0,0,0.6)' }} />,
    cell: () => <StyledIcon className="icon-binoculars" style={{ color: '#0070D2' }} />,
    maxWidth: '20px',
    minWidth: '20px',
    center: true,
    compact: true,
  },
  {
    name: <FontAwesomeIcon icon="envelope" style={{ color: 'rgba(0,0,0,0.6)' }} />,
    cell: () => <FontAwesomeIcon icon="envelope" style={{ color: '#0070D2' }} />,
    maxWidth: '20px',
    minWidth: '20px',
    center: true,
    compact: true,
  },
  {
    name: <FontAwesomeIcon icon="phone-alt" style={{ color: 'rgba(0,0,0,0.6)' }} />,
    cell: row => (
      <StyledRingCenteralButton row={row}>
        <FontAwesomeIcon icon="phone-alt" size="xs" />
      </StyledRingCenteralButton>
    ),
    maxWidth: '25px',
    minWidth: '25px',
    center: true,
    compact: true,
  },
  {
    name: <StyledIcon className="icon-view-resume" style={{ color: 'rgba(0,0,0,0.6)' }} />,
    cell: row => <StyledIcon className="icon-view-resume" style={{ color: '#0070D2' }} />,
    maxWidth: '20px',
    minWidth: '20px',
    center: true,
    compact: true,
  },
  {
    name: <FontAwesomeIcon icon="flag" style={{ color: 'rgba(0,0,0,0.6)' }} />,
    cell: () => <FontAwesomeIcon icon="flag" style={{ color: '#ff3c3c', opacity: 0.7 }} />,
    maxWidth: '15px',
    minWidth: '15px',
    center: true,
    compact: true,
  },
  {
    name: <InputField placeholder="First Name" />,
    selector: 'first_name',
    sortable: true,
  },
  {
    name: <InputField placeholder="Last Name" />,
    selector: 'last_name',
  },
  {
    name: <InputField placeholder="Preferred Name" />,
    selector: 'preferred_name',
  },
  {
    name: <InputField placeholder="Status" />,
    cell: row => getModuleStatusButton(row),
    grow: 2,
  },
  {
    name: <InputField placeholder="State" />,
    selector: 'state_name',
  },
  {
    name: <InputField placeholder="City" />,
    selector: 'city',
  },
  {
    name: <InputField placeholder="Job Title" />,
    selector: 'job_title',
    grow: 2,
  },
  {
    name: <InputField placeholder="Owner" />,
    selector: 'created_username',
  },
  {
    name: <InputField placeholder="Updated By" />,
    selector: 'updated_username',
  },
  {
    name: <InputField placeholder="Updated Date" />,
    selector: 'updated_date',
  },
  {
    name: <InputField placeholder="Primary Email" />,
    selector: 'email1',
  },
];

const DatatableContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDataTable = styled(DataTable)`
  overflow: auto;

  .rdt_TableHeader {
    background: #e5e7ea;
  }

  .rdt_TableRow {
    min-height: 33px;
  }

  .rdt_TableCol {
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    font-weight: 900;
  }

  .rdt_Pagination {
    display: flex;
    justify-content: flex-start;
  }
`;

const getModuleStatusButton = row => {
  const ModuleStatusButton = styled.button`
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    font-size: 13px !important;
    text-transform: none;
    box-shadow: none !important;
    text-overflow: ellipsis;
    max-width: 190px;
    overflow: hidden;
    white-space: nowrap;
    padding: 0px 6px !important;
    height: 22px;
    cursor: pointer;
    outline: none;

    ${row.status_colour_code}
  `;

  return (
    <React.Fragment>
      <ModuleStatusButton>{row.module_status_name}</ModuleStatusButton>
    </React.Fragment>
  );
};

class Candidates extends React.Component {
  state = {
    currentPage: 0,
    isRowSelected: false,
    searchModule: 'recruitbpm',
  };

  onSelectedRowsChange = ({ allSelected, selectedCount, selectedRows }) => {
    selectedCount > 0
      ? this.setState({ isRowSelected: true })
      : this.setState({ isRowSelected: false });
  };

  onChangePage = (page, totalRows) => {
    const { currentPage } = this.state;
    const { isAnotherPage, getNextPage } = this.props;

    if (page > currentPage) {
      isAnotherPage() && getNextPage();
      this.setState({ currentPage: page });
    }
  };

  render = () => {
    const { isRowSelected, searchModule } = this.state;
    const { candidates, totalElements } = this.props;

    return (
      <DatatableContainer>
        <ListingHeader title="Employees" isRowSelected={isRowSelected} />
        <CandidateSearchToolbar
          module={searchModule}
          onTypeChange={searchModule => this.setState({ searchModule: searchModule })}
        />
        {candidates.length > 0 ? (
          <StyledDataTable
            noHeader
            data={candidates}
            columns={columns}
            selectableRows
            pagination
            highlightOnHover
            paginationPerPage={25}
            paginationTotalRows={totalElements}
            onChangePage={this.onChangePage}
            onSelectedRowsChange={this.onSelectedRowsChange}
          />
        ) : (
          <ProgressIndicator />
        )}
      </DatatableContainer>
    );
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  // fetchCandidates: () => dispatch(fetchCandidates()),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRequest({
    pageable: true,
    requestId: 'candidates',
    requestAction: fetchCandidates,
    responseSelector: getCandidates,
    responseAlias: 'candidates',
    itemsPerPage: 25,
  })
)(Candidates);
