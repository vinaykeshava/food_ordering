import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './home'
import FoodOrder from './food-order'
import OrderSummary from './order-summary'
import Header from './header'


function App() {

  const [orderItems, setOrderItems] = useState([]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/food-order' element={<FoodOrder orderItems={orderItems} setOrderItems={setOrderItems} />} />
          <Route path='/order-summary' element={<OrderSummary orderItems={orderItems} setOrderItems={setOrderItems} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
