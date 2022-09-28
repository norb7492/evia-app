import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LoginForm } from '../../types/LoginFormType';
import { UserData } from '../../types/UserDataType';
import axios from 'axios';

export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (loginFormValues: LoginForm) => {
    try {
      const { username, password } = loginFormValues;
      const response = await axios.post('/api/login', {
        username,
        password,
      });
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const initialState: UserData = {
  username: '',
  name: '',
  isAuthenticated: false,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      if (action.payload.user) {
        state = { ...action.payload.user, isAuthenticated: true };
      }
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      console.log('failed to signup');
    });
  },
});

export default userDataSlice.reducer;
