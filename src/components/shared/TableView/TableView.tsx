import React, { useState, useMemo, useCallback } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  TableSortLabel,
  IconButton,
} from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { tableDataMap, TableData } from './tableData';
import CustomToolbar from '../CustomToolbar';

interface TableViewProps {
  selectedItem: string;
}

const TableView: React.FC<TableViewProps> = React.memo(({ selectedItem }) => {
  const tableData: TableData = tableDataMap[selectedItem] || {
    header: [],
    rows: [],
  };

  const rowsPerPage = 3;
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<number | null>(null);

  const handleChangePage = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  const handleSort = useCallback(
    (columnIndex: number) => {
      setOrder((prevOrder) =>
        orderBy === columnIndex && prevOrder === 'asc' ? 'desc' : 'asc',
      );
      setOrderBy(columnIndex);
    },
    [orderBy],
  );

  const sortedRows = useMemo(() => {
    if (orderBy === null) return tableData.rows;

    return [...tableData.rows].sort((a, b) => {
      const aValue = a[orderBy];
      const bValue = b[orderBy];

      if (!isNaN(Number(aValue)) && !isNaN(Number(bValue))) {
        return order === 'asc'
          ? Number(aValue) - Number(bValue)
          : Number(bValue) - Number(aValue);
      }

      return order === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
  }, [order, orderBy, tableData.rows]);

  const totalPages = Math.ceil(tableData.rows.length / rowsPerPage);
  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i),
    [totalPages],
  );

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%' }}>
      <CustomToolbar selectedItem={selectedItem} />
      <Table>
        <TableHead
          sx={{
            backgroundColor: '#D2D6EA',
            '& .MuiTableCell-root': {
              border: '1px solid #D2D6EA',
              color: '#F2F3FA',
              fontWeight: 'bold',
            },
          }}
        >
          <TableRow>
            {tableData.header.map((column, index) => (
              <TableCell key={index}>
                <TableSortLabel
                  active={orderBy === index}
                  direction={orderBy === index ? order : 'asc'}
                  onClick={() => handleSort(index)}
                  sx={{
                    color: '#0C3251',
                    fontWeight: 500,
                    lineHeight: '18px',
                    textAlign: 'left',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                  }}
                >
                  {column}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  const materialNrIndex =
                    selectedItem === 'Material Status'
                      ? tableData.header.indexOf('Material Nr')
                      : -1;

                  const detailsIndex =
                    selectedItem === 'Commissioning Status'
                      ? tableData.header.indexOf('Details')
                      : -1;

                  return (
                    <TableCell
                      key={cellIndex}
                      sx={
                        cellIndex === materialNrIndex
                          ? {
                              padding: '6px 12px',
                              gap: '0px',
                              borderRadius: '8px 0px 0px 0px',
                              opacity: 1,
                            }
                          : {}
                      }
                    >
                      {cellIndex === materialNrIndex ? (
                        <Box
                          component="span"
                          sx={{
                            width: '73px',
                            height: '40px',
                            fontWeight: 'bold',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#283593',
                            fontSize: '14px',
                            display: 'flex',
                            textAlign: 'center',
                            backgroundColor: '#F4F7FE',
                            padding: '4px 8px',
                            borderRadius: '4px',
                          }}
                        >
                          {cell}
                        </Box>
                      ) : cellIndex === detailsIndex ? (
                        <button
                          onClick={() => {}}
                          style={{
                            fontSize: '14px',
                            lineHeight: '20px',
                            textAlign: 'left',
                            textDecoration: 'none',
                            textUnderlinePosition: 'from-font',
                            backgroundColor: 'transparent',
                            border: '1px solid #D2D6EA',
                            cursor: 'pointer',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            width: '87px',
                          }}
                        >
                          {cell}
                        </button>
                      ) : (
                        cell
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 2,
          alignItems: 'center',
        }}
      >
        <Button
          onClick={() => handleChangePage(Math.max(page - 1, 0))}
          disabled={page === 0}
          sx={{
            textTransform: 'none',
            backgroundColor: 'transparent',
            padding: '8px 14px',
            gap: '8px',
            borderRadius: '8px',
            border: '1px solid #D2D6EA',
          }}
          startIcon={
            <ArrowBackOutlinedIcon sx={{ width: '1rem', height: '1rem' }} />
          }
        >
          Previous
        </Button>

        <Box sx={{ display: 'flex', gap: 1 }}>
          {pageNumbers.map((pageIndex) => (
            <IconButton
              key={pageIndex}
              onClick={() => handleChangePage(pageIndex)}
              sx={{
                width: '36px',
                height: '36px',
                fontSize: '1rem',
                padding: '4px',
                borderRadius: '8px',
                border: page === pageIndex ? '2px solid #D2D6EA' : 'none',
                color: '#6C7399',
              }}
            >
              {pageIndex + 1}
            </IconButton>
          ))}
        </Box>

        <Button
          onClick={() => handleChangePage(Math.min(page + 1, totalPages - 1))}
          disabled={page >= totalPages - 1}
          sx={{
            textTransform: 'none',
            backgroundColor: 'transparent',
            padding: '8px 14px',
            gap: '8px',
            borderRadius: '8px',
            border: '1px solid #D2D6EA',
          }}
          endIcon={
            <ArrowForwardOutlinedIcon sx={{ width: '1rem', height: '1rem' }} />
          }
        >
          Next
        </Button>
      </Box>
    </TableContainer>
  );
});

export default TableView;
