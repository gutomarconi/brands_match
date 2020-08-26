import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import BrandTable from './BrandTable';
import SubBrandTable from './SubBrandTable';

const EditableInput = (props) => {
  const { cell, updateMyRecords } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  /**
   * When close the modal after clicking in a row, we then update the data
   * with the new brand/variant brand information for all applicable fields.
   *
   * @param brand
   */
  const handleUpdate = (brand) => {
    Object.keys(brand).forEach(props => {
      if (props !== 'ID') {
        if (cell.row.values[props]){
          updateMyRecords(cell.row.index, props, brand[props]);
        }
      }
    });
  }

  const handleClose = (brand) => {
    handleUpdate(brand);
    setOpen(false);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <span style={{ marginTop: "20px"}}> {cell.value}</span>
      <IconButton color="primary" aria-label="edit" onClick={() => handleOpen(true)}>
        <EditIcon />
      </IconButton>
      {cell.column.id === "BrandCode"
        ? <BrandTable show={open} handleClose={(brand) => handleClose(brand)} />
        : null}
      {cell.column.id === "IndividualBrandVariantCode"
        ? <SubBrandTable show={open} handleClose={handleClose} brand={cell.row.values.BrandCode} />
        : null}
    </div>
  )
}

export default EditableInput;
