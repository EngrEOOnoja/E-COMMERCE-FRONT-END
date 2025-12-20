
import { configureStore } from '@reduxjs/toolkit';
import { ProductsApi } from '../products/ProductsApi';
import cartReducer from '../cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
});
