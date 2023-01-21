import { configureStore } from '@reduxjs/toolkit';
import userReducer from './extra-reducers/testSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
