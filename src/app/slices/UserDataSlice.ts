import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    setUserData: (state, action: PayloadAction<UserData>) => {
      state = action.payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
