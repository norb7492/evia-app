import { useEffect } from 'react';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/redux-hooks';
import LoginForm from './login-form/LoginForm';
import { useSignInMutation } from './services/loginServiceSlice';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';
import { setIsSubmit } from './store/loginFormSlice';
import loginBG from '../../assets/login_bg.jpg'

function Login() {
  const [signUp] = useSignInMutation();
  const navigate = useNavigate();

  const { isSubmit, loginFormValues, formErrors } = useAppSelector(
    (state: RootState) => state.login
  );

  const dispatch = useAppDispatch();

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
      dispatch(setIsSubmit(false));
      signUpSaveUser();
    }
  }, [loginFormValues]);

  return (
    <div className='relative w-full h-screen'>
      <div className='fixed blur-sm -z-10 bg-center bg-auto'>
        <img src={loginBG} alt=""/>
      </div>

      <div className='flex justify-center items-center h-full'>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
