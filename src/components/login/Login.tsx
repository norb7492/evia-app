import { useEffect } from 'react';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/redux-hooks';
import LoginForm from './login-form/LoginForm';
import { useSignInMutation } from './services/loginServiceSlice';
import { setCredentials } from '../../app/slices/userDataSlice';

function Login() {
  const dispatch = useAppDispatch();
  const [signUp] = useSignInMutation();

  const { isSubmit, loginFormValues, formErrors } = useAppSelector(
    (state: RootState) => state.login
  );

  const signUpSaveUser = async () => {
    const userData = await signUp(loginFormValues).unwrap();
    if (userData.user) {
      dispatch(setCredentials(userData.user));
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      signUpSaveUser().catch(console.error);
    }
  }, [loginFormValues]);

  return (
    <div className='relative w-full h-screen bg-zinc-900/90 '>
      <div className='flex justify-center items-center h-full'>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
