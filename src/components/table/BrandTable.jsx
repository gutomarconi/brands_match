import React from 'react'
import { brandColumns } from './config/getBrandTableConfig';
import { getBrandData } from '../../helpers/getBrandData';
import MainModal from '../MainModal';

const BrandTable = (props) => {
  const { show, handleClose } = props;

  const columns = React.useMemo(
    () => [...brandColumns],
    []
  );

  const data = React.useMemo(() => getBrandData(), []);

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

export default BrandTable;
