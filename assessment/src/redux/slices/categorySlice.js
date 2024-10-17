import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async({ rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/categories');
      return response.data;
    } catch(error) {
        if(error.response && error.response.data) {
          return rejectWithValue(error.response.data) 
        }
        return rejectWithValue({message: 'An error occured'})
    }
    
  }
)

const categorySlice = createSlice({
  'name': 'categories',
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(categorySlice.pending, (state) => {
      state.loading = true
    })
    .addCase(categorySlice.fulfilled, (state, action) => {
      state.categories = action.payload;
    })
    .addCase(categorySlice.rejected, (state, action) => {
      state.error = action.payload.error;
    })
  }
})

export default categorySlice.reducer;