import { useAppDispatch, useAppSelector } from '../../../app/redux-hooks';
import {
  setFormErrors,
  setFormValues,
  setIsSubmit,
} from '../store/loginFormSlice';
import { SiMicrosoft } from 'react-icons/si';
import eviaIcon from '../../../assets/evia_icon.jpg';
import { useEffect, useRef, useState } from 'react';
import { validate } from '../LoginUtils';
import { RootState } from '../../../app/store';
import { isEmpty } from 'lodash';

function LoginForm() {
  const [isShakeAnimationFinished, setIsShakeAnimationFinished] =
    useState(true);
  const usernameRef = useRef<HTMLInputElement>(null!);
  const passwordRef = useRef<HTMLInputElement>(null!);

  const dispatch = useAppDispatch();
  const { isSubmit, formErrors } = useAppSelector(
    (state: RootState) => state.login
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    dispatch(setFormErrors(validate(returnsRefPayload())));
    dispatch(setIsSubmit(true));
    setIsShakeAnimationFinished(false);
  }

  function shakeAnimationHandler() {
    setIsShakeAnimationFinished(true);
  }
  useEffect(() => {
    if (isEmpty(formErrors) && isSubmit) {
      dispatch(setFormValues(returnsRefPayload()));
    }
  }, [formErrors]);

  function returnsRefPayload() {
    const loginFormValues = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    return loginFormValues;
  }

  return (
    <form
      className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-md'
      onSubmit={handleSubmit}
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
      <div className='flex flex-col mb-4 '>
        <label>Username</label>
        <input
          id='text'
          ref={usernameRef}
          className={`border relative bg-gray-100 p-2 rounded-sm ${
            formErrors['username'] && !isShakeAnimationFinished
              ? 'animate-shaking-error'
              : ''
          }`}
          onAnimationEnd={shakeAnimationHandler}
          type='username'
        />
        <p className='text-red-500'>{formErrors['username']}</p>
      </div>
      <div className='flex flex-col mb-4 '>
        <label>Password</label>
        <input
          id='password'
          ref={passwordRef}
          className={`border relative bg-gray-100 p-2 rounded-sm ${
            formErrors['password'] && !isShakeAnimationFinished
              ? 'animate-shaking-error'
              : ''
          }`}
          onAnimationEnd={shakeAnimationHandler}
          type='password'
        />
        <p className='text-red-500'>{formErrors['password']}</p>
      </div>
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
  );
}

export default LoginForm;
