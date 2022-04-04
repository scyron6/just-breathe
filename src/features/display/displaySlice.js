import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    switchActive: (state) => {
      state.active = !state.active;
    },
    makeInactive: (state) => {
      state.active = false;
    },
  },
});

export const { switchActive, makeInactive } = displaySlice.actions;

export const selectActive = (state) => state.display.active;

export default displaySlice.reducer;
