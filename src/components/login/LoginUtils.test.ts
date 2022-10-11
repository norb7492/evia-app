import { describe } from 'vitest';
import { validate } from './LoginUtils';

describe('validate', () => {
  it('it should not return any errors', () => {
    const validateErrors = validate({
      email: 'babundo7492@gmail.com',
      password: '1234',
    });

    expect(validateErrors).toEqual({});
  });

  it('it should return errors for all fields', () => {
    const validateErrors = validate({
      email: '',
      password: '',
    });

    expect(validateErrors).toEqual({
      email: 'Hey! Type your email.',
      password: 'I need your password there.',
    });
  });

  it('it should return error for email', () => {
    const validateErrors = validate({
      email: '',
      password: '1234',
    });

    expect(validateErrors).toEqual({
      email: 'Hey! Type your email.',
    });
  });

  it('it should return error for password', () => {
    const validateErrors = validate({
      email: 'babundo7492@gmail.com',
      password: '',
    });

    expect(validateErrors).toEqual({
      password: 'I need your password there.',
    });
  });
});
