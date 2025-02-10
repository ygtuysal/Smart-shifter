import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  IconButton,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Tooltip,
} from '@mui/material';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import AddIcon from '@mui/icons-material/Add';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import PrintIcon from '@mui/icons-material/Print';
import GridOnIcon from '@mui/icons-material/GridOn';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

interface DualTableViewProps {
  selectedItem?: string;
}

const secondTableHeaders = [
  'Message Document',
  'Rename Message Document',
  'Download',
];

const rows: any[] = [];

const DocumentsMails: React.FC<DualTableViewProps> = ({ selectedItem }) => {
  const [pageSecondTable, setPageSecondTable] = useState(0);

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper
            sx={{
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 2,
              border: '2px solid #ccc',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: '0.3s',
              '&:hover': { backgroundColor: '#f5f5f5' },
            }}
          >
            <CloudUploadRoundedIcon sx={{ fontSize: 50, color: 'gray' }} />
            <Typography variant="h6" fontWeight="600" sx={{ color: '#3F51B5' }}>
              Click to upload message
            </Typography>
            <Typography variant="body2" color="textSecondary">
              or drag and drop
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ width: '50%' }}
            >
              SVG, PNG, JPG or GIF (max. 800x400px)
            </Typography>
          </Paper>
          <Button
            variant="contained"
            fullWidth
            sx={{
              marginTop: 2,
              textTransform: 'none',
              fontWeight: 'bold',
              padding: '1rem',
            }}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={9}>
          <TableContainer component={Paper} sx={{ padding: 2 }}>
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
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Correspondence with the customer
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
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
                {rows.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={secondTableHeaders.length}
                      align="center"
                    >
                      <Typography variant="body2" color="textSecondary">
                        Sorry, no matching records found
                      </Typography>
                    </TableCell>
                  </TableRow>
                ) : (
                  rows.map((row, index) => (
                    <TableRow key={index}>
                      {row.map((cell: any, i: number) => (
                        <TableCell key={i}>{cell}</TableCell>
                      ))}
                    </TableRow>
                  ))
                )}
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
                  setPageSecondTable(Math.max(pageSecondTable - 1, 0))
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
              <Button
                onClick={() => setPageSecondTable(pageSecondTable + 1)}
                disabled={rows.length === 0}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default DocumentsMails;
