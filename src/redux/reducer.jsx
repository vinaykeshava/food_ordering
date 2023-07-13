import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderItems: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder(state, action) {
      const { name, quantity, price } = action.payload;
      state.orderItems.push({ name, quantity, price });
    },
    removeFromOrder(state, action) {
      const name = action.payload;
      state.orderItems = state.orderItems.filter(
        (item) => item.name !== name
      );
    },
    updateOrderQuantity(state, action) {
      const { name, quantity } = action.payload;
      const item = state.orderItems.find((item) => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearOrder(state){
      state.orderItems = initialState.orderItems;
    },
  },
});

export const { addToOrder, removeFromOrder, updateOrderQuantity, clearOrder } =
  orderSlice.actions;

export default orderSlice.reducer;
