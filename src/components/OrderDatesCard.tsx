import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Divider,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const rows = [
  { name: 'Order Income', value: 'Not Yet Determined' },
  { name: 'Purchase Release', value: 'Not Yet Determined' },
  { name: 'Production Release', value: 'Not Yet Determined' },
  { name: 'Commis Start', value: 'Not Yet Determined' },
  { name: 'Commis End', value: 'Not Yet Determined' },
  { name: 'Cutlist Start', value: 'Not Yet Determined' },
  { name: 'Product Start', value: 'Not Yet Determined' },
  { name: 'Product End', value: 'Not Yet Determined' },
  { name: 'Quality Start', value: 'Not Yet Determined' },
  { name: 'ERP OC Nr', value: 'Not Yet Determined' },
];

const OrderDatesCard = () => {
  return (
    <Card
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '1rem',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CalendarTodayOutlinedIcon sx={{ marginRight: '0.5rem' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Order Dates - Plan / Actual
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{ color: '#6c757d', marginTop: '4px' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio.
            </Typography>
          </Box>

          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Box>

        <Divider sx={{ width: '100%', marginY: '1rem' }} />

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: 'none',
            backgroundColor: 'transparent',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Table size="small" aria-label="simple table" sx={{ flexGrow: 1 }}>
            <TableBody>
              {rows.map((row, index) => (
                <React.Fragment key={row.name}>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: 'bold',
                        width: '70%',
                        flexGrow: 1,
                        borderRight: '.5px solid #e0e0e0',
                      }}
                    >
                      {row.name}
                    </TableCell>

                    <TableCell sx={{ width: '30%' }}>{row.value}</TableCell>
                  </TableRow>

                  {index < rows.length - 1 && (
                    <TableRow>
                      <TableCell colSpan={2} sx={{ padding: 0 }}></TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default OrderDatesCard;
