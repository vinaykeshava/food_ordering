import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToOrder, removeFromOrder, updateOrderQuantity } from './redux/reducer';
import './App.css'
import Home from './home'
import FoodOrder from './food-order'
import OrderSummary from './order-summary'
import Header from './header'
import OrderHistory from './order-history';


function App() {

  const orderItems = useSelector((state) => state.order.orderItems);


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/food-order' element={<FoodOrder  />} />
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='/order-history' element={<OrderHistory />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
