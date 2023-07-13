import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import useStyles from './header-styles'
import { Link } from 'react-router-dom';
import { MenuItem } from '@mui/material';

export default function Header() {

  const [anchorEl, setAnchorEl] = useState(null);
  const {classes} = useStyles();

  const routeToOrder = () => {
    window.location.href="/food-order";
  }

  const routeToSummary = () => {
    window.location.href="/order-summary"
  }


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log(event.target);
    setAnchorEl(null);
  };

  const handleOrder = () => {
    routeToOrder();
    handleClose();
  }

  const handleSummary = () => {
    routeToSummary();
    handleClose();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu 
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
            <MenuItem key='food-order' onClick={handleOrder}>Order Food</MenuItem>
            <MenuItem key='order-summary' onClick={handleSummary}>Order Summary</MenuItem>
          </Menu>
          <Typography component="div" sx={{ flexGrow: 1 }}  variant="h6" className={classes.typography}>
          <Link to='/home' className={classes.link}>
            Food Delivery
          </Link>
          </Typography>
          <Button variant='contained' className={classes.button} onClick={routeToOrder}>Food Order</Button>
          <Button variant='contained' className={classes.button} onClick={routeToSummary}>Order Summary</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}