import React, { useState } from 'react';
import { Button, MenuItem, Paper, Select, Grid } from '@mui/material';

const EscalationLevelSelector: React.FC = () => {
  const [level, setLevel] = useState('Level 1');

  const handleSubmit = () => {
    console.log('Selected Escalation Level:', level);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6} sx={{ margin: '0.5rem' }}>
          <Select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            fullWidth
          >
            <MenuItem value="Level 1">Level 1</MenuItem>
            <MenuItem value="Level 2">Level 2</MenuItem>
            <MenuItem value="Level 3">Level 3</MenuItem>
          </Select>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              justifyContent: 'flex-start',
              width: '200px',
              height: '50px',
              padding: '6px 12px',
              gap: '10px',
              borderRadius: '8px',
              border: 'none',
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EscalationLevelSelector;
