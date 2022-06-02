import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '../util/drawer';
import BasicModal from './modal';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '1%' }}>
      <AppBar position="static"
      color={'secondary'}
      >
        <Toolbar>
            <Drawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Calendar
          </Typography>
          <BasicModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
