import { FormErrors, LoginForm } from '../../types/LoginFormType';

export const validate = (values: LoginForm) => {
  const errors: FormErrors = {};
  if (!values.username) {
    errors.username = 'Username is required';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
};
