import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
