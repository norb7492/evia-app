import { configureStore } from '@reduxjs/toolkit';
import loginFormReducer from './slices/LoginFormSlice';
import userDataReducer from './slices/UserDataSlice';

export const store = configureStore({
  reducer: {
    login: loginFormReducer,
    userData: userDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
