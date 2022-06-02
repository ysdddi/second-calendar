import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '../util/drawer';
import BasicModal from './modal';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '1%' }}>
      <AppBar position="static"
      color={'secondary'}
      >
        <Toolbar>
          <IconButton
           className='menuBtn'
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Drawer />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Calendar
          </Typography>
          <BasicModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
