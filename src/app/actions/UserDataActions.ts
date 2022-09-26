import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginForm } from '../../types/LoginFormType';
import { setUserData } from '../slices/UserDataSlice';

export const validateLoginUser = (
  loginFormValues: LoginForm,
  dispatch: Dispatch
) => {
  const { username, password } = loginFormValues;
  axios
    .post('/api/login', {
      username,
      password,
    })
    .then(function (response) {
      if (response.data.user) {
        dispatch(setUserData({ ...response.data.user, isAuthenticated: true }));
      }
    })
    .catch(function (error) {
      console.log('yeah', error);
    });
};
