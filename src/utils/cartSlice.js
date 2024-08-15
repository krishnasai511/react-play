import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Banana", "Apple", "Grapes"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    deleteCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
