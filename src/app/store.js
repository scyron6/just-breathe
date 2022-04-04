import { configureStore } from '@reduxjs/toolkit';
import selectorReducer from '../features/selectors/selectorSlice';
import displayReducer from '../features/display/displaySlice';

export const store = configureStore({
  reducer: {
    selector: selectorReducer,
    display: displayReducer,
  },
});
