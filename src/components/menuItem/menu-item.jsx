import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToOrder, removeFromOrder, updateOrderQuantity } from '../../redux/reducer';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

export function MenuItem({ name, price, description, imageUrl, rating, numReviews }) {
  const dispatch = useDispatch();
  const orderItems = useSelector((state) => state.order.orderItems);

  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const foundItem = orderItems.find((item) => item.name === name);
    if (foundItem) {
      setCount(foundItem.quantity);
    } else {
      setCount(0);
    }
  }, [name, orderItems]);

  const handleIncrement = () => {
    if (count === 0) {
      const newItem = {
        name,
        quantity: 1,
        price,
      };
      dispatch(addToOrder(newItem));
    } else {
      dispatch(updateOrderQuantity({ name, quantity: count + 1 }));
    }
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(updateOrderQuantity({ name, quantity: count - 1 }));
      setCount(count - 1);
    }
  };

  const handleRemove = () => {
    dispatch(removeFromOrder(name));
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={name} subheader={'$ ' + price} />
      <CardMedia component="img" height="194" image={imageUrl} alt="Dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {expanded ? description : description.slice(0, 70) + '...'}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Rating readOnly value={rating} />
          <CardActions sx={{ justifyContent: 'flex-end', display: 'inline' }}>
            {expanded && <ExpandLessIcon onClick={handleExpandClick} />}
            {!expanded && <ExpandMoreIcon onClick={handleExpandClick} />}
          </CardActions>
        </Box>
        <Typography>Reviews : {numReviews}</Typography>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Button variant="outlined" onClick={handleDecrement}>
              -
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="body1">{count}</Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={handleIncrement}>
              +
            </Button>
          </Grid>
          {count > 0 && (
            <Grid item>
              <Button variant="outlined" onClick={handleRemove}>
                Remove
              </Button>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}

MenuItem.propTypes = {
  name: propTypes.string,
  price: propTypes.number,
  description: propTypes.string,
  imageUrl: propTypes.string,
  rating: propTypes.number,
  numReviews: propTypes.number,
};

export default MenuItem;
