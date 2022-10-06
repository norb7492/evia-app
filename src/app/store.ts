import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { apiSlice } from './services/apiSlice';
import loginFormReducer from '../components/login/store/loginFormSlice';
import userDataReducer from './slices/userDataSlice';

const rootReducer = combineReducers({
  login: loginFormReducer,
  userData: userDataReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

//for testing purpose
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
