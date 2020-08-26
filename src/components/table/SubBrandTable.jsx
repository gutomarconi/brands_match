import React from 'react'
import { getSubBrandData } from '../../helpers/getSubBrandData';
import { subBrandColumns } from './config/getSubBrandTableConfig';
import MainModal from '../MainModal';

const SubBrandTable = (props) => {
  const { show, handleClose, brand } = props;
  const columns = React.useMemo(
    () => [...subBrandColumns],
    []
  )

  let data = React.useMemo(() => getSubBrandData(), []);
  data = data.filter(data => data.BrandCode === brand)

  const handleSelect = (row) => {
    handleClose(row.values);
  };

  return (
    <MainModal
      show={show}
      handleClose={handleClose}
      columns={columns}
      data={data}
      hiddenColumns={['ID']}
      handleSelect={handleSelect}
    />
  )
};

export default SubBrandTable;
