import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData, UserDetails } from '../../types/UserDataType';

const initialState: UserData = {
  userDetails: {
    username: '',
    name: '',
  },
  status: 'loggedout',
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserDetails>) => {
      state.userDetails = action.payload;
      state.status = 'loggedin';
    },
  },
});

export const { setCredentials } = userDataSlice.actions;

export default userDataSlice.reducer;
