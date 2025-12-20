
import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../products/ProductsApi';
import cartReducer from '../cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
