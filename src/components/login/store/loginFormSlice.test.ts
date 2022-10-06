import { describe } from 'vitest';
import 'whatwg-fetch';
import { store } from '../../../app/store';
import { setFormErrors, setFormValues, setIsSubmit } from './loginFormSlice';

describe('LoginForm Reducer', () => {
  it('should check initial values', () => {
    const initialState = {
      loginFormValues: {
        username: '',
        password: '',
      },
      formErrors: {},
      isSubmit: false,
    };
    const state = store.getState().login;
    expect(state).toEqual(initialState);
  });

  it('should set form values', () => {
    store.dispatch(
      setFormValues({
        username: 'babundo7492',
        password: '1234',
      })
    );
    const state = store.getState().login;
    expect(state.loginFormValues).toEqual({
      username: 'babundo7492',
      password: '1234',
    });
  });

  it('should set form errors', () => {
    store.dispatch(setIsSubmit(true));
    const state = store.getState().login;
    expect(state.isSubmit).toEqual(true);
  });

  it('should set submit boolean', () => {
    store.dispatch(
      setFormErrors({
        username: 'Username is required',
        password: 'Password is required',
      })
    );
    const state = store.getState().login;
    expect(state.formErrors).toEqual({
      username: 'Username is required',
      password: 'Password is required',
    });
  });
});
