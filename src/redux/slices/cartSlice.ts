import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Service = {
  id: number;
  price: number;
};

type CartState = {
  services: Service[];
  total: number;
  count: number;
};

const initialState: CartState = {
  services: [],
  total: 0,
  count: 0
};

export const cartSlice = createSlice({
  name: "travel-agency",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Service>) => {
        const exists = state.services.find(service => service.id === action.payload.id);
        if (!exists) {
          state.services.push(action.payload);
          state.total += action.payload.price;
          state.count += 1;
        }
    },
    removeFromCart: (state, action: PayloadAction<Service>) => {
      state.services = state.services.filter(
        (product) => product.id !== action.payload.id
      );
      state.total -= action.payload.price;
      state.count -= 1;
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;