import React, { useState } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import TableView from '../shared/TableView/TableView';
import DualTableView from './DualTableView/DualTableView';
import { Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import GeneralInfoCard from '../GeneralInfoCard';
import OrderDatesCard from '../OrderDatesCard';

import GoNoGo from './GoNoGo/GoNoGo';
import EscalationLevelSelector from '../tabs/EscalationLevel/EscalationLevel';
import DocumentsMails from '../tabs/DocumentsMails/DocumentsMails';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = () => {
  const [selectedItem, setSelectedItem] = useState<string>('');

  return (
    <Grid2>
      <Header />
      <Box sx={{ padding: '3rem' }}>
        <Sidebar
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <Box
          component="main"
          sx={{
            flex: 1,
            padding: '16px',
            overflowY: 'auto',
          }}
        >
          {selectedItem === 'Go/No Go' ? (
            <GoNoGo />
          ) : selectedItem === 'Escalation Level' ? (
            <EscalationLevelSelector />
          ) : selectedItem === 'Documents & Mails' ? (
            <DocumentsMails />
          ) : selectedItem === 'Related Notes' ? (
            <DualTableView selectedItem={selectedItem} />
          ) : selectedItem ? (
            <TableView selectedItem={selectedItem} />
          ) : (
            <Grid2 container spacing={2}>
              <Grid2 xs={12} md={6}>
                <GeneralInfoCard />
              </Grid2>
              <Grid2 xs={12} md={6}>
                <OrderDatesCard />
              </Grid2>
            </Grid2>
          )}
        </Box>
      </Box>
    </Grid2>
  );
};

export default MainLayout;
