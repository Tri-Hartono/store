import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      const product = action.payload;

      // cek jika product sudah siap digunakan
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //increase the quantity
        return state.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
