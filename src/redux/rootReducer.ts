import { baseApi } from "./api/baseApi";
import cartReducer from "./slices/cartSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  cart: cartReducer,
};
