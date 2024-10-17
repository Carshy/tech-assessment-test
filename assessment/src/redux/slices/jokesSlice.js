import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchJokes = createAsyncThunk(
  'jokes/fetchJokes',
  async (category) => {
    const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${category}`);
    return response.data;
  }
);

const jokesSlice = createSlice({
  name: 'jokes',
  initialState: {
    jokes: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJokes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJokes.fulfilled, (state, action) => {
        state.loading = false;
        state.jokes = action.payload;
      })
      .addCase(fetchJokes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jokesSlice.reducer;
