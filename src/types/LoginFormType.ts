export interface LoginForm {
  email: string;
  password: string;
}

export interface FormErrors {
  email?: string;
  password?: string;
}

export interface LoginState {
  loginFormValues: LoginForm;
  formErrors: FormErrors;
  isSubmit: boolean;
}
