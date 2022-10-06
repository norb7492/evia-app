import { describe } from 'vitest';
import { validate } from './LoginUtils';

describe('validate', () => {
  it('it should not return any errors', () => {
    const validateErrors = validate({
      username: 'babundo7492',
      password: '1234',
    });

    expect(validateErrors).toEqual({});
  });

  it('it should return errors for all fields', () => {
    const validateErrors = validate({
      username: '',
      password: '',
    });

    expect(validateErrors).toEqual({
      username: 'Username is required',
      password: 'Password is required',
    });
  });

  it('it should return error for username', () => {
    const validateErrors = validate({
      username: '',
      password: '1234',
    });

    expect(validateErrors).toEqual({
      username: 'Username is required',
    });
  });

  it('it should return error for password', () => {
    const validateErrors = validate({
      username: 'babundo7492',
      password: '',
    });

    expect(validateErrors).toEqual({
      password: 'Password is required',
    });
  });
});
