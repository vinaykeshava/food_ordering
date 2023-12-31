import React, { useEffect, useState } from 'react'
import useStyles from "./food-order-styles"
import { Grid } from '@mui/material';
import CircularProgress from "@mui/material/CircularProgress"
import MenuItem from '../components/menuItem/menu-item';
import getMenu from '../services/getMenu'


export default function FoodOrder() {

  const { classes } = useStyles();
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    getMenu.get()
      .then((response) => {
        setMenuList(response.data.data)
      })
      .catch((error) => {
        alert(error);
      });
  }, [])

  if (menuList.length === 0) {
    return (
      <Grid container className={classes.loader} justifyContent='center'>
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container spacing={2} justifyContent='space-around' marginTop={2} className={classes.root}>
        {menuList.length > 0 && menuList.map((element) => (
          <Grid item key={element.name + element.imageUrl}>
            <MenuItem name={element.name} price={element.price} description={element.description} imageUrl={element.imageURL} rating={element.rating} numReviews={element.rating} />
          </Grid>
        )
        )}
      </Grid>
    )
  }
}
