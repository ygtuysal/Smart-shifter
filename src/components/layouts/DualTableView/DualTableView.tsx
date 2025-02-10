import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Toolbar,
  Tooltip,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import PrintIcon from '@mui/icons-material/Print';
import GridOnIcon from '@mui/icons-material/GridOn';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
interface DualTableViewProps {
  selectedItem: string;
}

const firstTableHeaders = [
  'Notes',
  'Production Items',
  'Category',
  'Edit',
  'Done',
];
const secondTableHeaders = [
  'Notes',
  'Material Name',
  'Category',
  'Edit',
  'Done',
];

const rows = [
  ['Test-1001', 'Inspection completed', 'Master Data'],
  ['Test-1002', 'Pending review', 'Production'],
  ['Test-1003', 'Quality Check', 'Logistics'],
  ['Test-1004', 'Stock Verification', 'Inventory'],
];
const rowsPerPage = 2;

const DualTableView: React.FC<DualTableViewProps> = ({ selectedItem }) => {
  const [pageFirstTable, setPageFirstTable] = useState(0);
  const [pageSecondTable, setPageSecondTable] = useState(0);
  const totalPagesFirstTable = Math.ceil(rows.length / rowsPerPage);

  const handleChangePageFirstTable = (newPage: number) => {
    setPageFirstTable(newPage);
  };

  const handleChangePageSecondTable = (newPage: number) => {
    setPageSecondTable(newPage);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <TableContainer component={Paper} sx={{ width: '50%', padding: 2 }}>
          <Toolbar
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              px: 2,
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                border: '1px solid #D2D6EA',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#fff',
              }}
            >
              <Typography
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '8px 16px',
                  color: '#3F51B5',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: '#F2F3FA',
                  transition: 'all 0.3s ease',
                }}
              >
                Active
              </Typography>
              <Typography
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '8px 16px',
                  color: '#6C7399',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Done
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Active Notes
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    gap: '8px',
                    cursor: 'pointer',
                  }}
                >
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                  <Typography
                    sx={{
                      color: '#6C7399',
                      padding: '0 .5rem',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '16.94px',
                      textAlign: 'left',
                      textUnderlinePosition: 'from-font',
                      textDecorationSkipInk: 'none',
                    }}
                  >
                    Add new note
                  </Typography>
                </Box>
                {[
                  { title: 'Zoom Out', icon: <ZoomOutIcon /> },
                  { title: 'Print', icon: <PrintIcon /> },
                  { title: 'Grid View', icon: <GridOnIcon /> },
                  { title: 'Upload File', icon: <FileUploadIcon /> },
                ].map((item, index) => (
                  <Tooltip key={index} title={item.title}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        gap: '8px',
                      }}
                    >
                      <IconButton>{item.icon}</IconButton>
                    </Box>
                  </Tooltip>
                ))}
                <Tooltip title="More options">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      gap: '8px',
                    }}
                  >
                    <IconButton>
                      <MoreHorizIcon />
                    </IconButton>
                  </Box>
                </Tooltip>
              </Box>
            </Box>
          </Toolbar>

          <Table>
            <TableHead>
              <TableRow>
                {firstTableHeaders.map((header) => (
                  <TableCell key={header} sx={{ fontWeight: 'bold' }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(
                  pageFirstTable * rowsPerPage,
                  (pageFirstTable + 1) * rowsPerPage,
                )
                .map((row, index) => (
                  <TableRow key={index}>
                    {row.map((cell, i) => (
                      <TableCell key={i}>{cell}</TableCell>
                    ))}
                    <TableCell>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <CheckBoxRoundedIcon />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: 2,
            }}
          >
            <Button
              onClick={() =>
                handleChangePageFirstTable(Math.max(pageFirstTable - 1, 0))
              }
              disabled={pageFirstTable === 0}
              sx={{
                textTransform: 'none',
                borderRadius: '8px',
                border: '1px solid #D2D6EA',
              }}
              startIcon={<ArrowBackOutlinedIcon />}
            >
              Previous
            </Button>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {Array.from({ length: totalPagesFirstTable }, (_, i) => i).map(
                (pageIndex) => (
                  <IconButton
                    key={pageIndex}
                    onClick={() => handleChangePageFirstTable(pageIndex)}
                    sx={{
                      width: '36px',
                      height: '36px',
                      fontSize: '1rem',
                      padding: '4px',
                      borderRadius: '8px',
                      border:
                        pageFirstTable === pageIndex
                          ? '2px solid #D2D6EA'
                          : 'none',
                      color: '#6C7399',
                    }}
                  >
                    {pageIndex + 1}
                  </IconButton>
                ),
              )}
            </Box>
            <Button
              onClick={() =>
                handleChangePageFirstTable(
                  Math.min(
                    pageFirstTable + 1,
                    Math.ceil(rows.length / rowsPerPage) - 1,
                  ),
                )
              }
              disabled={
                pageFirstTable >= Math.ceil(rows.length / rowsPerPage) - 1
              }
              sx={{
                textTransform: 'none',
                borderRadius: '8px',
                border: '1px solid #D2D6EA',
              }}
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              Next
            </Button>
          </Box>
        </TableContainer>
        <TableContainer component={Paper} sx={{ width: '50%', padding: 2 }}>
          <Toolbar
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              px: 2,
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                border: '1px solid #D2D6EA',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#fff',
              }}
            >
              <Typography
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '8px 16px',
                  color: '#6C7399',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                Active
              </Typography>
              <Typography
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '8px 16px',
                  color: '#3F51B5',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: '#F2F3FA',
                  transition: 'all 0.3s ease',
                }}
              >
                Done
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Done Notes
              </Typography>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    gap: '8px',
                    cursor: 'pointer',
                  }}
                >
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                  <Typography
                    sx={{
                      color: '#6C7399',
                      padding: '0 .5rem',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '16.94px',
                      textAlign: 'left',
                      textUnderlinePosition: 'from-font',
                      textDecorationSkipInk: 'none',
                    }}
                  >
                    Add new note
                  </Typography>
                </Box>

                {[
                  { title: 'Zoom Out', icon: <ZoomOutIcon /> },
                  { title: 'Print', icon: <PrintIcon /> },
                  { title: 'Grid View', icon: <GridOnIcon /> },
                  { title: 'Upload File', icon: <FileUploadIcon /> },
                ].map((item, index) => (
                  <Tooltip key={index} title={item.title}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        gap: '8px',
                      }}
                    >
                      <IconButton>{item.icon}</IconButton>
                    </Box>
                  </Tooltip>
                ))}
                <Tooltip title="More options">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      gap: '8px',
                    }}
                  >
                    <IconButton>
                      <MoreHorizIcon />
                    </IconButton>
                  </Box>
                </Tooltip>
              </Box>
            </Box>
          </Toolbar>

          <Table>
            <TableHead>
              <TableRow>
                {secondTableHeaders.map((header) => (
                  <TableCell key={header} sx={{ fontWeight: 'bold' }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(
                  pageSecondTable * rowsPerPage,
                  (pageSecondTable + 1) * rowsPerPage,
                )
                .map((row, index) => (
                  <TableRow key={index}>
                    {row.map((cell, i) => (
                      <TableCell key={i}>{cell}</TableCell>
                    ))}
                    <TableCell>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <CheckBoxRoundedIcon />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: 2,
            }}
          >
            <Button
              onClick={() =>
                handleChangePageSecondTable(Math.max(pageSecondTable - 1, 0))
              }
              disabled={pageSecondTable === 0}
              sx={{
                textTransform: 'none',
                borderRadius: '8px',
                border: '1px solid #D2D6EA',
              }}
              startIcon={<ArrowBackOutlinedIcon />}
            >
              Previous
            </Button>

            <Box sx={{ display: 'flex', gap: 1 }}>
              {Array.from({ length: totalPagesFirstTable }, (_, i) => i).map(
                (pageIndex) => (
                  <IconButton
                    key={pageIndex}
                    onClick={() => handleChangePageFirstTable(pageIndex)}
                    sx={{
                      width: '36px',
                      height: '36px',
                      fontSize: '1rem',
                      padding: '4px',
                      borderRadius: '8px',
                      border:
                        pageFirstTable === pageIndex
                          ? '2px solid #D2D6EA'
                          : 'none',
                      color: '#6C7399',
                    }}
                  >
                    {pageIndex + 1}
                  </IconButton>
                ),
              )}
            </Box>

            <Button
              onClick={() =>
                handleChangePageSecondTable(
                  Math.min(
                    pageSecondTable + 1,
                    Math.ceil(rows.length / rowsPerPage) - 1,
                  ),
                )
              }
              disabled={
                pageSecondTable >= Math.ceil(rows.length / rowsPerPage) - 1
              }
              sx={{
                textTransform: 'none',
                borderRadius: '8px',
                border: '1px solid #D2D6EA',
              }}
              endIcon={<ArrowForwardOutlinedIcon />}
            >
              Next
            </Button>
          </Box>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default DualTableView;
