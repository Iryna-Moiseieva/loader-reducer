import { createSlice } from '@reduxjs/toolkit';

const loaderInitialState = {
  status: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState: loaderInitialState,
  reducers: {
    setIsLoading(state, action) {
      state.status = action.payload;
    }
  }
})

export const { setIsLoading } = loaderSlice.actions;

export const loaderReducer = loaderSlice.reducer;
