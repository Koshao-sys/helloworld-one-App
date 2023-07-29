import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: 'Hello, World!',
  loading: false,
  fetched: false,
  error: null,
};

export const fetchMessage = createAsyncThunk(
  'greetings/fetchMessage',
  async () => {
    try {
      const response = await fetch('/api/greetings/hello');
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMessage.pending]: (state) => ({ ...state, isLoading: true }),
    [fetchMessage.fulfilled]: (state, action) => ({
      ...state,
      fetched: true,
      isLoading: false,
      message: action.payload.message,
    }),
    [fetchMessage.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
});

export default greetingsSlice.reducer;
