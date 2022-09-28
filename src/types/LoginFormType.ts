export interface LoginForm {
  username: string;
  password: string;
}

export interface FormErrors {
  username?: string;
  password?: string;
}

export interface LoginState {
  loginFormValues: LoginForm;
  formErrors: FormErrors;
  isSubmit: boolean;
}
