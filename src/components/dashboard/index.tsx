import {
  Box, CssBaseline
} from '@mui/material';
import React, { useState } from 'react';
import { drawerWidth, miniDrawerWidth } from '@/utils/constants';
import ClosableDrawer from '../closableDrawer';
import MiniDrawer from '../miniDrawer';
import TopBar from '../topBar';
import Videos from '../videos';

const Dashboard = () => {

  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <React.Fragment>
      <CssBaseline />

      {/* Mini Drawer */}
      <MiniDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

      {/* TopBar */}
      <TopBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

      {/* Closable Drawer */}
      <ClosableDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: { md: `${miniDrawerWidth + (drawerOpen ? drawerWidth : 0)}px` },
          padding: '80px 20px 20px 20px',
        }}
      >
        <Videos />
      </Box>
    </React.Fragment>
  );
}

export default Dashboard;
