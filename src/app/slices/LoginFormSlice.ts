import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormErrors, LoginForm, LoginState } from '../../types/LoginFormType';

const initialState: LoginState = {
  loginFormValues: {
    username: '',
    password: '',
  },
  formErrors: {},
  isSubmit: false,
};

export const loginSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setFormValues: (state, action: PayloadAction<LoginForm>) => {
      state.loginFormValues = action.payload;
    },
    setFormErrors: (state, action: PayloadAction<FormErrors>) => {
      state.formErrors = action.payload;
    },
    setIsSubmit: (state, action: PayloadAction<boolean>) => {
      state.isSubmit = action.payload;
    },
  },
});

export const { setIsSubmit, setFormErrors, setFormValues } = loginSlice.actions;

export default loginSlice.reducer;
