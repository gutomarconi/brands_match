import { SelectColumnFilter } from '../../../helpers/table/Filters';

const subBrandColumns = [
  {
    Header: 'ID',
    accessor: 'ID',
    disableFilters: true,
  },
  {
    Header: 'Brand Variant Name',
    accessor: 'IndividualBrandVariantName',
    filter: 'fuzzyText',
  },
  {
    Header: 'Brand Variant Code',
    accessor: 'IndividualBrandVariantCode',
    headerClassName: 'wordwrap',
    openPopup: true,
    filter: 'fuzzyText',
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
    Header: 'Sector Name',
    accessor: 'ProductSectorName',
    disableFilters: true,
  },
  {
    Header: 'Source System',
    accessor: 'SourceSystem',
    Filter: SelectColumnFilter,
    filter: 'includes',
  },
];

export {
  subBrandColumns,
}
