import React from 'react';
import { compose } from 'lodash/fp';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchCandidates } from 'bi-core/candidates/actions';
import { getCandidates } from 'bi-core/candidates/selectors';
import withRequest from 'bi-core/withRequest';
import { PrimaryButton } from '../common/buttons/buttons';
import DataTable from 'react-data-table-component';

const columns = [
  {
    cell: () => <PrimaryButton>Action</PrimaryButton>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    name: 'Firstname',
    selector: 'first_name',
    sortable: true,
  },
  {
    name: 'Lastname',
    selector: 'last_name',
    sortable: true,
  },
  {
    name: 'Job Title',
    selector: 'job_title',
    sortable: true,
  },
  {
    name: 'Country',
    selector: 'country_name',
    sortable: true,
  },
  {
    name: 'Nationality',
    selector: 'nationality',
    sortable: true,
  },
  {
    name: 'Created Date',
    selector: 'created_date',
    sortable: true,
  },
  {
    name: 'Updated Date',
    selector: 'updated_date',
    sortable: true,
  },
  {
    name: 'Created By',
    selector: 'created_by',
    sortable: true,
  },
  {
    name: 'Updated By',
    selector: 'updated_by',
    sortable: true,
  },
];

const DatatableContainer = styled.div``;

const StyledDataTable = styled(DataTable)`
  overflow: auto;

  .rdt_TableHeader {
    background: #e5e7ea;
  }

  .rdt_Pagination {
    display: flex;
    justify-content: flex-start;
  }
`;

class Candidates extends React.Component {
  state = {
    currentPage: 0,
  };

  render = () => {
    console.log(this.props);

    const { candidates, isAnotherPage, getNextPage, totalElements } = this.props;
    const { currentPage } = this.state;

    if (candidates.length > 0) {
      return (
        <DatatableContainer>
          <StyledDataTable
            title="Employees"
            data={candidates}
            columns={columns}
            selectableRows
            pagination
            paginationPerPage={25}
            paginationTotalRows={totalElements}
            onChangePage={(page, totalRows) => {
              console.log('CLICKED');
              if (page > currentPage) {
                isAnotherPage() && getNextPage();
                this.setState({ currentPage: page });
              }
            }}
          />
        </DatatableContainer>
      );
    }
    return null;
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
