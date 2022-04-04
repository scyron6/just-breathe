import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inhale: 5,
  hold: 5,
  exhale: 5,
  hold2: 5,
};

export const selectorSlice = createSlice({
  name: 'selector',
  initialState,
  reducers: {
    increment: (state, action) => {
      switch (action.payload) {
        case 'INHALE':
          state.inhale += 1;
          break;
        case 'HOLD':
          state.hold += 1;
          break;
        case 'EXHALE':
          state.exhale += 1;
          break;
        case 'HOLD2':
          state.hold2 += 1;
          break;

        default:
          break;
      }
    },

    decrement: (state, action) => {
      switch (action.payload) {
        case 'INHALE':
          if (state.inhale > 1) state.inhale -= 1;
          break;
        case 'HOLD':
          if (state.hold > 0) state.hold -= 1;
          break;
        case 'EXHALE':
          if (state.exhale > 1) state.exhale -= 1;
          break;
        case 'HOLD2':
          if (state.hold2 > 0) state.hold2 -= 1;
          break;

        default:
          break;
      }
    },
  },
});

export const { increment, decrement } = selectorSlice.actions;

export const selectInhale = (state) => state.selector.inhale;
export const selectHold = (state) => state.selector.hold;
export const selectExhale = (state) => state.selector.exhale;
export const selectHold2 = (state) => state.selector.hold2;

export default selectorSlice.reducer;
