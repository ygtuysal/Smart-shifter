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
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const rows = [
  { name: 'Order Type', value: 'First Order' },
  { name: 'Order Name', value: 'Test' },
  { name: 'Quantity', value: '100' },
  { name: 'Lot Nr', value: '123456' },
  { name: 'Pos Nr', value: 'A23' },
  { name: 'Customer Order Nr', value: 'CO-987654' },
  { name: 'Product Nr', value: 'PN-55432' },
  { name: 'Product Name', value: 'High Precision Gear' },
  { name: 'Quantity', value: '250' },
  { name: 'ERP OC Nr', value: 'ERP-778899' },
];

const GeneralInfoCard = () => {
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
              <BookmarkBorderOutlinedIcon sx={{ marginRight: '0.5rem' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                General Informations
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

export default GeneralInfoCard;
