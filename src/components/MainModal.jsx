import React from 'react'
import MainTable from './table/MainTable';
import { Modal } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const MainModal = (props) => {
  const { show, handleClose, columns, data, hiddenColumns, handleSelect } = props;

  function getModalStyle() {
    return {
      top: `10%`,
      left: `20%`,
      height: 700,
      overflow: "auto",
    };
  }

  const useStyles = makeStyles((theme) =>
    createStyles({
      paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

      },
    }),
  );

  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  return (
    <Modal
      open={show}
      onClose={handleClose}
      aria-labelledby="main-modal"
    >
      <div style={modalStyle} className={classes.paper} >
        <MainTable columns={columns} data={data} hiddenColumns={hiddenColumns} isModal={true} handleSelect={(row) => handleSelect(row)}/>
      </div>
    </Modal>
  )
}

export default MainModal;
