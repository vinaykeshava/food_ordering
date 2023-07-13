import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import OrderTable from './order-table/order-table'
import useStyles from "./order-history-styles"

function OrderHistory() {

  const [orders, setOrders] = useState({});
  const { classes } = useStyles();

  useEffect(() => {
    axios.get('http://localhost:3000/menu/orders')
      .then((response) => {
        console.log(response.data.orders);
        setOrders(response.data.orders)
      })
      .catch((error)=>{
        alert(error);
      })
  }, []);

  if (Object.keys(orders).length === 0) {
    return (
      <Grid container className={classes.loader} justifyContent='center'>
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <>
        <Typography variant="h5" gutterBottom>
          Order Summary
        </Typography>
        {Object.keys(orders).length > 0 ? (
          <OrderTable orders={orders} />
        ) : (
          <Typography variant="body1">No orders found.</Typography>
        )}
      </>
    );
  }
}

export default OrderHistory;
