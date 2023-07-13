import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearOrder } from '../redux/reducer';
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import orderPost from '../services/orderPost';
import useStyles from './order-summary-styles'

function OrderSummary() {
  const orderItems = useSelector((state) => state.order.orderItems);
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const handleCompleteOrder = () => {
    orderPost.post('/', { items: orderItems })
      .then(response => {
        // clear the cart after completing an order
        dispatch(clearOrder());
        alert("Order Submitted")
      })
      .catch(error => {
        console.error(error);
        alert(error);
      });
  };

  const totalPrice = orderItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Order Summary
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderItems.map((item) => (
                <TableRow key={item.name}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          Total Price: ${totalPrice.toFixed(2)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleCompleteOrder}>
          Complete Order
        </Button>
      </Grid>
    </Grid>
  );
}

export default OrderSummary;
