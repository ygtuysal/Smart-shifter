import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

interface OrderStatusFormProps {
  onSubmit: (data: any | null) => void;
  selectedRow?: any;
}

const OrderStatusForm: React.FC<OrderStatusFormProps> = React.memo(
  ({ onSubmit, selectedRow }) => {
    const [formData, setFormData] = useState({
      state: 'Cancelled',
      productionItem: '',
      description: '',
      index: undefined,
    });

    useEffect(() => {
      if (selectedRow) {
        setFormData({ ...selectedRow, index: selectedRow.index });
      }
    }, [selectedRow]);

    const handleInputChange = useCallback((field: string, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }, []);

    const handleSubmit = useCallback(() => {
      onSubmit(formData);
    }, [formData, onSubmit]);

    const tabStyles = useMemo(
      () => ({
        cancelled: {
          color: formData.state === 'Cancelled' ? '#3F51B5' : '#6C7399',
          backgroundColor:
            formData.state === 'Cancelled' ? '#F2F3FA' : 'transparent',
        },
        onHold: {
          color: formData.state === 'On Hold' ? '#3F51B5' : '#6C7399',
          backgroundColor:
            formData.state === 'On Hold' ? '#F2F3FA' : 'transparent',
        },
      }),
      [formData.state],
    );

    return (
      <Grid2 container spacing={2} sx={{ width: '50%' }}>
        <Grid2
          xs={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            textAlign: 'left',
          }}
        >
          <Grid2 sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="subtitle2" fontWeight="bold">
              Select Cancelled
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Grid2>
          <Grid2
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '1rem',
            }}
          >
            <Typography variant="subtitle2" fontWeight="bold">
              Description
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 xs={8}>
          <Box sx={{ maxWidth: 600, margin: 'auto' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                border: '1px solid #D2D6EA',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                marginBottom: '2rem',
              }}
            >
              <Typography
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '8px 16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  ...tabStyles.cancelled,
                }}
                onClick={() => handleInputChange('state', 'Cancelled')}
              >
                Cancelled
              </Typography>
              <Typography
                sx={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '8px 16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  ...tabStyles.onHold,
                }}
                onClick={() => handleInputChange('state', 'On Hold')}
              >
                On Hold
              </Typography>
            </Box>
            <FormControl fullWidth>
              <Select
                value={formData.productionItem}
                onChange={(e) =>
                  handleInputChange('productionItem', e.target.value)
                }
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select a reason
                </MenuItem>
                <MenuItem value="Reason 1">Reason 1</MenuItem>
                <MenuItem value="Reason 2">Reason 2</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter a description..."
              multiline
              rows={4}
              sx={{ marginTop: '24px' }}
              helperText="This is a hint text to help user."
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '16px',
                gap: '1rem',
              }}
            >
              <Button variant="outlined" onClick={() => onSubmit(null)}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    );
  },
);

export default OrderStatusForm;
