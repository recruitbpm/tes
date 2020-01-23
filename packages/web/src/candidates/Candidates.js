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
import { InputField } from '../common/formElements/input';

const StyledIcon = styled.i``;
const StyledRingCenteralButton = styled.a`
  color: white;
  padding: 1px 3px;
  line-height: 1;
  font-size: 13px;
  border-radius: 3px;
  cursor: pointer;

  ${props =>
    props.row.phone_contact && props.row.phone_contact !== ''
      ? 'background: orange;'
      : 'background: #dddfe2;pointer-events:none;'}
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
    name: (
      <InputField
        placeholder="First Name"
        onKeyPress={e => e.key === 'Enter' && e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      />
    ),
    cell: row => (
      <a href="#" style={{ color: '#0070D2' }}>
        {row.first_name}
      </a>
    ),
    selector: 'first_name',
    sortable: true,
  },
  {
    name: (
      <InputField
        placeholder="Last Name"
        onKeyPress={e => e.key === 'Enter' && e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      />
    ),
    cell: row => (
      <a href="#" style={{ color: '#0070D2' }}>
        {row.last_name}
      </a>
    ),
    selector: 'last_name',
    sortable: true,
  },
  {
    name: (
      <InputField
        placeholder="Preferred Name"
        onKeyPress={e => e.key === 'Enter' && e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      />
    ),
    selector: 'preferred_name',
    sortable: true,
  },
  {
    name: (
      <InputField
        placeholder="Status"
        onKeyPress={e => e.key === 'Enter' && e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      />
    ),
    cell: row => getModuleStatusButton(row),
    width: '200px',
    sortable: true,
  },
  {
    name: (
      <InputField
        placeholder="State"
        onKeyPress={e => e.key === 'Enter' && e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      />
    ),
    selector: 'state_name',
    sortable: true,
  },
  {
    name: (
      <InputField
        placeholder="City"
        onKeyPress={e => e.key === 'Enter' && e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      />
    ),
    selector: 'city',
    sortable: true,
  },
  {
    name: (
      <InputField
        placeholder="Job Title"
        onKeyPress={e => e.key === 'Enter' && e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      />
    ),
    selector: 'job_title',
    sortable: true,
    grow: 2,
  },
  {
    name: (
      <InputField
        placeholder="Owner"
        onKeyPress={e => e.key === 'Enter' && e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      />
    ),
    selector: 'created_username',
    sortable: true,
  },
  {
    name: (
      <InputField
        placeholder="Updated By"
        onKeyPress={e => e.key === 'Enter' && e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      />
    ),
    cell: row => (
      <a href="#" style={{ color: '#0070D2' }}>
        {row.updated_username}
      </a>
    ),
    sortable: true,
  },
  {
    name: (
      <InputField
        placeholder="Updated Date"
        onKeyPress={e => e.key === 'Enter' && e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      />
    ),
    selector: 'updated_date',
    sortable: true,
    width: '200px',
  },
  {
    name: (
      <InputField
        placeholder="Primary Email"
        onKeyPress={e => e.key === 'Enter' && e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      />
    ),
    cell: row => (
      <a href="#" style={{ color: '#0070D2' }}>
        {row.email1}
      </a>
    ),
    sortable: true,
    width: '250px',
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

  .rdt_TableCol_Sortable {
    flex-direction: row-reverse;
  }

  .rdt_TableCol {
    padding: 0px 5px;
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

    border: none;
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
    const { getNextPage } = this.props;

    if (page > currentPage) {
      getNextPage();
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
            highlightOnHover
            pagination
            paginationPerPage={100}
            paginationRowsPerPageOptions={[100]}
            paginationTotalRows={totalElements}
            onChangePage={this.onChangePage}
            onSelectedRowsChange={this.onSelectedRowsChange}
            sortIcon={<FontAwesomeIcon icon={'long-arrow-alt-down'} />}
          />
        ) : null}
      </DatatableContainer>
    );
  };
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

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
    itemsPerPage: 100,
  })
)(Candidates);
