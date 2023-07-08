import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COLORS_URL } from "../const.js";

export const fetchColor = createAsyncThunk(
  'color/fetchColor',
  async () => {
    const response = await fetch(COLORS_URL);
    const data = await response.json();
    return data;
  }
)

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    activeColor: 'black',
    status: 'Idle',
    colorsList: [],
    error: null,
  },
  reducers: {
    setActiveGender: (state, action) => {
      state.activeColor = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchColor.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(fetchColor.fulfilled, (state, action) => {
        state.status = 'success';
        state.colorsList = action.payload;
        //state.colorsList = Object.keys(action.payload);
      })
      .addCase(fetchColor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export const { setActiveColor } = colorSlice.actions;

export default colorSlice.reducer;