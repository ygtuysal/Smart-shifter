import React, { useCallback, useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Select,
  MenuItem,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  TableSortLabel,
  IconButton,
  Tooltip,
} from '@mui/material';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import OrderStatusForm from './OrderStatusForm';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import PrintIcon from '@mui/icons-material/Print';
import GridOnIcon from '@mui/icons-material/GridOn';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const secondTableHeaders = [
  'Production Items',
  'Description',
  'State',
  'File',
  'Action',
];

const OrderStatus: React.FC = () => {
  const [rows, setRows] = useState<any[]>([
    {
      productionItem: 'Reason 1',
      description: 'Test description',
      state: 'On Hold',
      file: 'Uploaded File',
    },
  ]);
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    productionItem: '',
    description: '',
    state: '',
    file: '',
  });

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(() => {
    setSelectedRow(formData);
  }, [formData]);

  const handleFormSubmit = useCallback(
    (formData: any) => {
      setRows((prevRows) => {
        if (selectedRow !== null && selectedRow.index !== undefined) {
          return prevRows.map((row, index) =>
            index === selectedRow.index ? formData : row,
          );
        }
        return [...prevRows, formData];
      });
      setSelectedRow(null);
    },
    [selectedRow],
  );

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {selectedRow ? (
            <OrderStatusForm
              onSubmit={handleFormSubmit}
              selectedRow={selectedRow}
            />
          ) : (
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
                    Active Notes
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
                    {secondTableHeaders.map((header, index) => (
                      <TableCell key={index} sx={{ fontWeight: 'bold' }}>
                        <TableSortLabel
                          sx={{
                            color: '#0C3251',
                            fontWeight: 500,
                            lineHeight: '18px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                          }}
                        >
                          {header}
                        </TableSortLabel>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Select
                        value={formData.productionItem}
                        onChange={(e) =>
                          handleInputChange('productionItem', e.target.value)
                        }
                        displayEmpty
                        fullWidth
                      >
                        <MenuItem value="" disabled>
                          Select a reason
                        </MenuItem>
                        <MenuItem value="Reason 1">Reason 1</MenuItem>
                        <MenuItem value="Reason 2">Reason 2</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <TextField
                        value={formData.description}
                        onChange={(e) =>
                          handleInputChange('description', e.target.value)
                        }
                        placeholder="Enter a description..."
                        multiline
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <RadioGroup
                        row
                        value={formData.state}
                        onChange={(e) =>
                          handleInputChange('state', e.target.value)
                        }
                      >
                        <FormControlLabel
                          value="Cancelled"
                          control={<Radio />}
                          label="Cancelled"
                        />
                        <FormControlLabel
                          value="On Hold"
                          control={<Radio />}
                          label="On Hold"
                        />
                      </RadioGroup>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        startIcon={<CloudUploadRoundedIcon />}
                        onClick={() =>
                          handleInputChange('file', 'Uploaded File')
                        }
                      >
                        Click to upload
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        disabled={
                          !formData.productionItem || !formData.description
                        }
                      >
                        Submit
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderStatus;
