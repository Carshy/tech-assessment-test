import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categorySlice';
import jokesReducer from './slices/jokesSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    jokes: jokesReducer,
  },
});

export default store;
