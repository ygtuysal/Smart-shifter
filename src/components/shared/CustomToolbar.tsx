import React from 'react';
import { Toolbar, Typography, IconButton, Tooltip, Box } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import PrintIcon from '@mui/icons-material/Print';
import GridOnIcon from '@mui/icons-material/GridOn';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import TimelapseRoundedIcon from '@mui/icons-material/TimelapseRounded';

interface CustomToolbarProps {
  selectedItem: string;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({ selectedItem }) => {
  const titleMap: Record<string, string> = {
    'Commissioning Status': 'Commissioning',
    'Material Status': 'Purchase Orders Released',
    'Production Status': '',
  };

  const title = titleMap[selectedItem] || '';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
        {selectedItem === 'Material Status' ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #E7FAE8',
              backgroundColor: '#E7FAE8',
              borderRadius: '8px',
              gap: '8px',
              color: '#039855',
            }}
          >
            <CheckIcon />
            <Typography
              variant="body2"
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '16.94px',
                textAlign: 'left',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
                padding: '.5rem',
              }}
            >
              Purchase Orders Released
            </Typography>
          </Box>
        ) : (
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        )}
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

          <Tooltip title="Filter list">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: '8px',
              }}
            >
              <IconButton>
                <FilterListIcon sx={{ width: 16, height: 16 }} />
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
                Filter
              </Typography>
            </Box>
          </Tooltip>
        </Box>
      </Toolbar>
      {selectedItem === 'Production Status' && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            paddingX: 2,
            flexWrap: 'wrap',
            margin: '1rem .5rem',
          }}
        >
          {[
            {
              text: 'Active Production Orders',
              icon: <ShoppingCartOutlinedIcon />,
            },
            {
              text: 'Scheduled Production Start',
              icon: <DateRangeOutlinedIcon />,
            },
            {
              text: 'Overall Production Time (min)',
              icon: <ScheduleOutlinedIcon />,
            },
            {
              text: 'Production Time per Piece in Minutes',
              icon: <ScheduleOutlinedIcon />,
            },
            {
              text: 'Estimated Time Remaining (min)',
              icon: <TimelapseRoundedIcon />,
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #ccc',
                borderRadius: '8px',
                gap: '8px',
                cursor: 'pointer',
                flex: `1 1 calc(100% / 5 - 1rem)`,
              }}
            >
              <IconButton>{item.icon}</IconButton>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '16.94px',
                  textAlign: 'left',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CustomToolbar;
