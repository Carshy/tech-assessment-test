import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from '../redux/slices/categorySlice';

const store = configureStore({
  reducer: {
    categories: categoryReducer
  }
});

export default store;