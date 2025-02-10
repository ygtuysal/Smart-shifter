import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: '#3f51b5',
        color: '#fff',
        padding: '2rem 3rem',
      }}
    >
      <Grid2 container spacing={2}>
        <Grid2 xs={6}>
          <Typography variant="body2" sx={{ margin: '1rem 0' }}>
            SmartShifter MES
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Order Board For Order Nr
          </Typography>
          <Typography variant="body2">
            Track all order related activities
          </Typography>
        </Grid2>
        <Grid2
          xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <Button
            sx={{
              fontWeight: 'bold',
              textTransform: 'none',
              border: '1px solid',
              padding: '1rem 3rem',
              backgroundColor: '#fff',
              color: '#3f51b5',
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: '#fff',
                color: '#3f51b5',
                cursor: 'pointer',
              },
            }}
            onClick={() => {}}
          >
            Close X
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Header;
