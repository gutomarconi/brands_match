import { SelectColumnFilter } from '../../../helpers/table/Filters';
import EditableInput from '../EditableInput';

const pmqColumns = [
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
    Cell: EditableInput
  },
  {
    Header: 'Brand Variant Name',
    accessor: 'IndividualBrandVariantName',
    filter: 'fuzzyText',
  },
  {
    Header: 'Brand Variant Code',
    accessor: 'IndividualBrandVariantCode',
    filter: 'fuzzyText',
    Cell: EditableInput
  },
  {
    Header: 'Level To Harmonize',
    accessor: 'LevelToHarmonize',
    disableFilters: true,
  },
  {
    Header: 'Source System',
    accessor: 'SourceSystem',
    Filter: SelectColumnFilter,
    filter: 'includes',
  },
  {
    Header: 'Source ID',
    accessor: 'SourceID',
    show: false,
    disableFilters: true,
  },
  {
    Header: 'Source Metric',
    accessor: 'SourceVolumeMetric',
  },
  {
    Header: 'Source Description',
    accessor: 'SourceDescription',
    filter: 'fuzzyText',
  },
  {
    Header: 'Source Sector',
    accessor: 'SourceSector',
    disableFilters: true,
  },
  {
    Header: 'Source Brand',
    accessor: 'SourceBrand',
    filter: 'fuzzyText',
  },
  {
    Header: 'Source Brand Variant',
    accessor: 'SourceIndividualBrandVariant',
    filter: 'fuzzyText',
  },
  {
    Header: 'Source Volume',
    accessor: 'SourceVolume"',
    disableFilters: true,
  },
  {
    Header: 'Source Pack Type',
    accessor: 'SourcePackType',
    Filter: SelectColumnFilter,
    filter: 'includes',
  },
  {
    Header: 'Source Pack Size',
    accessor: 'SourcePackSize',
    Filter: SelectColumnFilter,
    filter: 'includes',
  },
  {
    Header: 'Source Country',
    accessor: 'SourceCountry',
    Filter: SelectColumnFilter,
    filter: 'includes',
  },
  {
    Header: 'Matching Route',
    accessor: 'MatchingRoute',
    disableFilters: true,
  },
  {
    Header: 'Start Date',
    accessor: 'StartDateTime',
    disableFilters: true,
  },
  {
    Header: 'Last Changed User',
    accessor: 'LastChgUserName',
    disableFilters: true,
  },
  {
    Header: 'Status',
    accessor: 'Status',
    disableFilters: true,
  },
];

export {
  pmqColumns,
}
