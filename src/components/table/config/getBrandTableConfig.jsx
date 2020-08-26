import { SelectColumnFilter } from '../../../helpers/table/Filters';

const brandColumns = [
  {
    Header: 'ID',
    accessor: 'ID',
    disableFilters: true,
  },
  {
    Header: 'Brand Name',
    accessor: 'BrandName',
    filter: 'fuzzyText',
  },
  {
    Header: 'Brand Code',
    accessor: 'BrandCode',
    headerClassName: 'wordwrap',
    openPopup: true,
    filter: 'fuzzyText',
  },
  {
    Header: 'Trend Mark',
    accessor: 'TradeMark',
    filter: 'fuzzyText',
  },
  {
    Header: 'Brand Owner',
    accessor: 'BrandOwner',
    filter: 'fuzzyText',
  },
  {
    Header: 'Source System',
    accessor: 'SourceSystem',
    Filter: SelectColumnFilter,
    filter: 'includes',
  },
  {
    Header: 'Status',
    accessor: 'Status',
    Filter: SelectColumnFilter,
  },
];

export {
  brandColumns,
}
