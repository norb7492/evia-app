import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FormErrors,
  LoginState,
  SubmitFormValues,
} from '../../types/LoginFormType';

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
    setSubmitFormValues: (state, action: PayloadAction<SubmitFormValues>) => {
      if (action.payload.name === 'username') {
        state.loginFormValues.username = action.payload.value;
      }
      if (action.payload.name === 'password') {
        state.loginFormValues.password = action.payload.value;
      }
    },
    setFormErrors: (state, action: PayloadAction<FormErrors>) => {
      state.formErrors = action.payload;
    },
    setIsSubmit: (state, action: PayloadAction<boolean>) => {
      state.isSubmit = action.payload;
    },
  },
});

export const { setIsSubmit, setSubmitFormValues, setFormErrors } =
  loginSlice.actions;

export default loginSlice.reducer;
