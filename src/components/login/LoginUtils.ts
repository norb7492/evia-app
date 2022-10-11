import { FormErrors, LoginForm } from '../../types/LoginFormType';

export const validate = (values: LoginForm) => {
  const errors: FormErrors = {};
  if (!values.email) {
    errors.email = 'Hey! Type your email.';
  }
  if (!values.password) {
    errors.password = 'I need your password there.';
  }
  return errors;
};
