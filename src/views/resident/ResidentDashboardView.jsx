import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete'; 
import PaymentIcon from '@mui/icons-material/Payment'; 
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'; 
import NotificationsIcon from '@mui/icons-material/Notifications';
import FeedbackIcon from '@mui/icons-material/Feedback'; 
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout'; 

const drawerWidth = 240;

const ResidentDashboardView = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false); 
  const navigate = useNavigate(); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogoutClick = () => {
    setLogoutDialogOpen(true); 
  };

  const handleLogoutConfirm = () => {

    console.log('Logging out...');
    navigate('/customer/auth');
    setLogoutDialogOpen(false); 
  };

  const handleLogoutCancel = () => {
    setLogoutDialogOpen(false); 
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon /> },
          { text: 'Bins', icon: <DeleteIcon /> },
          { text: 'Payments', icon: <PaymentIcon /> },
          { text: 'Special Collection Requests', icon: <RequestQuoteIcon /> },
          { text: 'Notifications', icon: <NotificationsIcon /> },
          { text: 'Feedback & Complaints', icon: <FeedbackIcon /> },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              '&:hover': {
                backgroundColor: '#f0f0f0', 
              },
              padding: '16px', 
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{ typography: 'body2', ml: 1 }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Resident Dashboard
          </Typography>

          <Tooltip title="Profile" arrow>
            <IconButton
              color="inherit"
              sx={{
                '&:hover': {
                  color: '#ffeb3b',
                },
              }}
            >
              <PersonIcon />
            </IconButton>
          </Tooltip>

          
          <Tooltip title="Logout" arrow>
            <IconButton
              color="inherit"
              onClick={handleLogoutClick}
              sx={{
                '&:hover': {
                  color: '#ff5722', 
                },
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>

      {/* Logout Confirmation Dialog */}
      <Dialog open={logoutDialogOpen} onClose={handleLogoutCancel}>
        <DialogTitle>Logout Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to log out?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogoutConfirm} color="primary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ResidentDashboardView;
