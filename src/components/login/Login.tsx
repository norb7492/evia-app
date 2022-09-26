import { ChangeEvent, useEffect, useState } from 'react';
import { SiMicrosoft } from 'react-icons/si';
import eviaIcon from '../../assets/evia_icon.jpg';
import axios from 'axios';
import LoginInput from './Input/LoginInput';

type LoginForm = {
  username: string;
  password: string;
};

type ErrorsForm = {
  username?: string;
  password?: string;
};

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
  const [loginFormValues, setLoginFormValues] = useState<LoginForm>({
    username: '',
    password: '',
  });
  const [formErrors, setFormErrorsValues] = useState<ErrorsForm>({});
  const [isSubmit, setIsSubmit] = useState(false);

  const submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormErrorsValues(validate(loginFormValues));
    setIsSubmit(true);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const { username, password } = loginFormValues;
      axios
        .post('/api/login', {
          username,
          password,
        })
        .then(function (response) {
          console.log('it worked', response);
        })
        .catch(function (error) {
          console.log('yeah', error);
        });
    }
  }, [formErrors]);

  const validate = (values: LoginForm) => {
    const errors: ErrorsForm = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

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
              errors={formErrors}
              onChangeHandler={onChangeHandler}
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
