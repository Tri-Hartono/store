import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      const product = action.payload;

      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) => (x.id === product.id ? { ...product } : x)); // Perbarui produk yang memiliki id yang sama
      } else {
        return [...state, { ...product }]; // Tambahkan produk baru jika belum ada di state
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
