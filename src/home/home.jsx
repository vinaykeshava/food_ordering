import React, { useState } from 'react'
import useStyles from "./home-styles.jsx"

export default function Home() {
  const { classes } = useStyles();


  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1>
          This is home
        </h1>
        <h2>Click on food order to order food</h2>
        <h2>Click on order summary to see cart</h2>
        <h2>Click on order History to see History of orders</h2>
      </ div>

    </div>
  )
}


