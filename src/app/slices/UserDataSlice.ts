import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '../../types/UserDataType';

const initialState: UserData = {
  username: '',
  name: '',
  isAuthenticated: false,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state = {
        ...action.payload,
        isAuthenticated: true,
      };
    },
  },
});

export const { setCredentials } = userDataSlice.actions;

export default userDataSlice.reducer;
