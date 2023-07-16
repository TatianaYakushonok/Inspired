import { createSlice } from "@reduxjs/toolkit";

const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems,
    countItems: cartItems.length,
  },
  reducers: {
    addToCart(state, action) {
      const { id, color, size, count } = action.payload;
      const item = cartItems.find(
        item => item.id === id && 
                item.color === color && 
                item.size === size);
      if (item) {
        item.count = count;
      } else {
        state.cartItems.push({ id, color, size, count });
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const { id, color, size } = action.payload;
      const itemIdex = cartItems.findIndex(
        item => item.id === id && 
                item.color === color && 
                item.size === size);
      if (itemIdex) {
        state.cartItems.splice(itemIdex, 1);
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;