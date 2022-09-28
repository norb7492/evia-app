import { useEffect } from 'react';
import { RootState } from '../../app/store';
import { validateLoginUser } from '../../app/actions/UserDataActions';
import { useAppDispatch, useAppSelector } from '../../app/redux-hooks';
import LoginForm from './login-form/LoginForm';

function Login() {
  const dispatch = useAppDispatch();

  const { isSubmit, loginFormValues, formErrors } = useAppSelector(
    (state: RootState) => state.login
  );

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      validateLoginUser(loginFormValues, dispatch);
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
