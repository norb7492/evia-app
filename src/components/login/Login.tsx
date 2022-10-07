import { useEffect } from 'react';
import { RootState } from '../../app/store';
import { useAppSelector } from '../../app/redux-hooks';
import LoginForm from './login-form/LoginForm';
import { useSignInMutation } from './services/loginServiceSlice';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';

function Login() {
  const [signUp] = useSignInMutation();
  const navigate = useNavigate();

  const { isSubmit, loginFormValues, formErrors } = useAppSelector(
    (state: RootState) => state.login
  );

  const signIn = useSignIn();

  const redirectPath = '/';

  const signUpSaveUser = async () => {
    try {
      const userData = await signUp(loginFormValues).unwrap();
      if (userData.token) {
        signIn({
          token: userData.token,
          expiresIn: 3600,
          tokenType: 'Bearer',
          authState: {
            email: userData.email,
            name: userData.name,
          },
        });
        navigate(redirectPath, { replace: true });
      }
    } catch (error) {
      console.log('some error happened');
    }
  };

  useEffect(() => {
    if (isEmpty(formErrors) && isSubmit) {
      signUpSaveUser();
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
