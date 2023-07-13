import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import store from '../store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.Fragment>,
)
