import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './src/redux/reducer';

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

export default store;
