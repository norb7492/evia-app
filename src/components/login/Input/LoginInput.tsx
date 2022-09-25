import { ChangeEvent, useState } from 'react';
import reactLogo from './assets/react.svg';

type ErrorsForm = {
  username?: string;
  password?: string;
};

type InputProps = {
  labelText: string;
  errorMessage?: string;
  name: 'username' | 'password';
  value: string;
  type: string;
  errors: ErrorsForm;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function LoginInput({
  labelText,
  errors,
  name,
  value,
  type,
  onChangeHandler,
}: InputProps) {
  return (
    <div className='flex flex-col mb-4'>
      <label>{labelText}</label>
      <input
        className={`border relative bg-gray-100 p-2 ${
          errors[name] ? 'animate-shaking-error' : ''
        }`}
        name={name}
        value={value}
        type={type}
        onChange={onChangeHandler}
      />
      <p className='text-red-500'>{errors[name]}</p>
    </div>
  );
}

export default LoginInput;
