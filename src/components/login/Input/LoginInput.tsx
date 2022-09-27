import { useAppDispatch, useAppSelector } from '../../../app/redux-hooks';
import { setSubmitFormValues } from '../../../app/slices/LoginFormSlice';
import { RootState } from '../../../app/store';

type InputProps = {
  labelText: string;
  name: 'username' | 'password';
  value: string;
  type: string;
};

function LoginInput({ labelText, name, value, type }: InputProps) {
  const dispatch = useAppDispatch();
  const { formErrors } = useAppSelector((state: RootState) => state.login);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setSubmitFormValues({ name, value }));
  };

  return (
    <div className='flex flex-col mb-4 '>
      <label>{labelText}</label>
      <input
        className={`border relative bg-gray-100 p-2 rounded-sm ${
          formErrors[name] ? 'animate-shaking-error' : ''
        }`}
        name={name}
        value={value}
        type={type}
        onChange={onChangeHandler}
      />
      <p className='text-red-500'>{formErrors[name]}</p>
    </div>
  );
}

export default LoginInput;
