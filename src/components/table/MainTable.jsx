import React from 'react'
import styled from 'styled-components'
import { useTable, useSortBy, useFilters } from 'react-table';
import CssBaseline from '@material-ui/core/CssBaseline'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { DefaultColumnFilter, FuzzyTextFilterFn } from '../../helpers/table/Filters';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;

      :last-child {
        border-right: 0;
      }
    }
  }
`

const MainTable = ({ columns, data, hiddenColumns, isModal, handleSelect, updateMyRecords }) => {
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: FuzzyTextFilterFn,
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
              .toLowerCase()
              .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      initialState: {
        hiddenColumns: [...hiddenColumns]
      },
      columns,
      data,
      defaultColumn,
      filterTypes,
      updateMyRecords,
    },
    useFilters,
    useSortBy,
  )

  const handleClick = (event, row) => {
    if (!isModal) return;
    handleSelect(row, updateMyRecords);
  }

  return (
    <Styles>
      <CssBaseline />
      <span>{isModal ? "*Click on the line to select" : ''}</span>
      <MaUTable {...getTableProps()} style={{ maxWidth: 1200}}>
        <TableHead style={{ backgroundColor: 'lightgrey'}}>
          {headerGroups.map(headerGroup => (
            <TableRow style={{ verticalAlign: 'sub' }} hover {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => { return (
                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())} >
                  <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 1, padding: 5, width: 'max-content'}}>
                    <span style={{ padding: "0.5rem" }}>
                      {column.render('Header')}
                    </span>
                    <span style={{ padding: "0.5rem" }}>
                      {column.isSortedDesc ? ' 🔽' : ' 🔼'}
                    </span>
                  </div>
                  {column.canFilter ? column.render('Filter') : null}
                </TableCell>
              )})}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <TableRow onClick={(event) => handleClick(event, row) } hover {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <TableCell {...cell.getCellProps()} >{cell.render('Cell')}</TableCell>
                    )
                  })}
                </TableRow>
              )}
          )}
        </TableBody>
      </MaUTable>
    </Styles>
  )
}

export default MainTable;
