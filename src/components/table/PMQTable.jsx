import React from 'react'
import { getPMQData } from '../../helpers/getPMQData';
import MainTable from './MainTable';
import { pmqColumns } from './config/getPMQTableConfig';

const PMQTable = () => {
  const columns = React.useMemo(
    () => [...pmqColumns],
    []
  )

  const data = React.useMemo(() => getPMQData(), []);

  const [records, setRecords] = React.useState(data);

  const updateMyRecords = (rowIndex, columnId, value) => {
    setRecords(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  return (
    <>
      <MainTable
        columns={columns}
        data={records}
        hiddenColumns={['SourceID', 'ID', 'LastChgUserName']}
        updateMyRecords={updateMyRecords}
      />
    </>
  )
}

export default PMQTable;
