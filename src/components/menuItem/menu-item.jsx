import React, { useState } from 'react';
import propTypes from 'prop-types'
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

export function MenuItem({ name, price, description, imageUrl, rating, numReviews, orderItems, setOrderItems }) {

  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={name}
        subheader={"$ " + price}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {expanded ? description : description.slice(0, 70) + "..."}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
          <Rating readOnly value={rating} />
          <CardActions sx={{ justifyContent: 'flex-end', display: 'inline' }}>
            {expanded && <ExpandLessIcon onClick={handleExpandClick} />}
            {!expanded && <ExpandMoreIcon onClick={handleExpandClick} />}
          </CardActions>
        </Box>
        <Typography>Reviews : {numReviews}</Typography>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Button variant="outlined" onClick={handleDecrement}>-</Button>
          </Grid>
          <Grid item>
            <Typography variant="body1">{count}</Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={handleIncrement}>+</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

MenuItem.prototype = {
  name: propTypes.string,
  price: propTypes.number,
  description: propTypes.string,
  imageUrl: propTypes.string,
  rating: propTypes.number,
  numReviews: propTypes.number,
  orderItems: propTypes.object,
  setOrderItems: propTypes.func,
}

export default MenuItem;

