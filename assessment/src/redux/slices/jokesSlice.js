// src/redux/jokesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch jokes by category
export const fetchJokesByCategory = createAsyncThunk(
  'jokes/fetchJokesByCategory',
  async (category) => {
    const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${category}`);
    return response.data.result; // Extract the array of jokes
  }
);

const jokesSlice = createSlice({
  name: 'jokes',
  initialState: {
    jokes: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJokesByCategory.pending, (state) => {
        state.status = 'loading';
        state.jokes = []; // Clear previous jokes
        state.error = null;
      })
      .addCase(fetchJokesByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jokes = action.payload;
      })
      .addCase(fetchJokesByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default jokesSlice.reducer;
