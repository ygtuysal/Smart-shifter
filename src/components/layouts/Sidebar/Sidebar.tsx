import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface SidebarProps {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedItem, setSelectedItem }) => {
  const menuItems = [
    'Material Status',
    'Commissioning Status',
    'Production Status',
    'Related Notes',
    'Go/No Go',
    'Escalation Level',
    'Documents & Mails',
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        border: '1px solid #D2D6EA',
        borderRadius: '12px',
        padding: '1rem',
        margin: '1rem',
      }}
    >
      <List
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 0,
          gap: 0,
        }}
      >
        {menuItems.map((text, index) => (
          <ListItem
            key={index}
            sx={{
              cursor: 'pointer',
              backgroundColor:
                selectedItem === text ? '#D2D6EA' : 'transparent',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '19.36px',
              textAlign: 'left',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
              color: selectedItem === text ? '#3F51B5' : '#000',
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
              whiteSpace: 'nowrap',
              minWidth: 'auto',
            }}
            onClick={() => setSelectedItem(text)}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
