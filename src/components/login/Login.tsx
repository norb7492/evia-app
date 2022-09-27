import { useEffect } from 'react';
import { SiMicrosoft } from 'react-icons/si';
import eviaIcon from '../../assets/evia_icon.jpg';
import LoginInput from './Input/LoginInput';
import { RootState } from '../../app/store';
import { setIsSubmit, setFormErrors } from '../../app/slices/LoginFormSlice';
import { LoginForm } from '../../types/LoginFormType';
import { validate } from './LoginUtils';
import { validateLoginUser } from '../../app/actions/UserDataActions';
import { useAppDispatch, useAppSelector } from '../../app/redux-hooks';

type Input = {
  id: number;
  name: 'username' | 'password';
  type: string;
  labelText: string;
};

const inputs: Input[] = [
  {
    id: 1,
    name: 'username',
    type: 'text',
    labelText: 'Username',
  },
  {
    id: 2,
    name: 'password',
    type: 'password',
    labelText: 'Password',
  },
];

function Login() {
  const dispatch = useAppDispatch();

  const { isSubmit, loginFormValues, formErrors } = useAppSelector(
    (state: RootState) => state.login
  );

  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setFormErrors(validate(loginFormValues)));
    dispatch(setIsSubmit(true));
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      validateLoginUser(loginFormValues, dispatch);
    }
  }, [formErrors]);

  return (
    <div className='relative w-full h-screen bg-zinc-900/90 '>
      <div className='flex justify-center items-center h-full'>
        <form
          className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-md'
          onSubmit={submitLogin}
        >
          <img
            className='text-center py-2'
            src={eviaIcon}
            alt='/'
          />
          <div className='py-8 flex'>
            <p className='border shadow hover:shadow-md px-2 py-2 relative flex items-center'>
              <SiMicrosoft className='mr-2' />
              Continue with Microsoft
            </p>
          </div>
          {inputs.map((input) => (
            <LoginInput
              key={input.id}
              {...input}
              value={loginFormValues[input.name as keyof LoginForm]}
            />
          ))}
          <button
            className='w-full py-3 mt-2 bg-lime-300 hover:bg-lime-500 font-bold relative rounded-sm'
            type='submit'
          >
            Login
          </button>
          <p className='flex items-center mt-2'>
            <input
              className='mr-2'
              type='checkbox'
            />
            Remember me
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
