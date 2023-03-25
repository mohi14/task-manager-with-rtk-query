import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import counterReducer from '../features/counter/counterSlice';
import filterReducer from '../features/filtering/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,

  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
});
