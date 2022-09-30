import { describe, vi } from 'vitest';
import {
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../mocks/server';
import 'whatwg-fetch';
import Login from './Login';
import { renderWithProviders } from '../../app/test.utils';
import LoginForm from './login-form/LoginForm';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Login', () => {
  test('Render Login', () => {
    renderWithProviders(<Login />);

    const usernameText = screen.getByText(/Username/i);
    const passwordText = screen.getByText(/Password/i);
    const usernameInput = screen.getByTestId('login-username');
    const passwordInput = screen.getByTestId('login-password');
    const usernameError = screen.queryByText(/Username is required/i);
    const passwordError = screen.queryByText(/Password is required/i);

    expect(usernameText).toBeInTheDocument();
    expect(passwordText).toBeInTheDocument();
    expect(usernameInput).toHaveDisplayValue('');
    expect(passwordInput).toHaveDisplayValue('');
    expect(usernameError).not.toBeInTheDocument();
    expect(passwordError).not.toBeInTheDocument();
  });
  test('should show login error if presss login button without passing any value', () => {
    renderWithProviders(<Login />);

    const usernameError = screen.queryByText(/Username is required/i);
    const passwordError = screen.queryByText(/Password is required/i);

    expect(usernameError).not.toBeInTheDocument();
    expect(passwordError).not.toBeInTheDocument();

    const loginButtonElement = screen.getByTestId('login-button');

    fireEvent.click(loginButtonElement);

    const usernameErrorAfterButtonPress =
      screen.getByText(/Username is required/i);
    const passwordErrorAfterButtonPress =
      screen.getByText(/Password is required/i);

    expect(usernameErrorAfterButtonPress).toBeInTheDocument();
    expect(passwordErrorAfterButtonPress).toBeInTheDocument();
  });
  test('should just show password error message', () => {
    renderWithProviders(<Login />);

    const usernameError = screen.queryByText(/Username is required/i);
    const passwordError = screen.queryByText(/Password is required/i);
    const usernameInput = screen.getByTestId('login-username');
    const passwordInput = screen.getByTestId('login-password');

    expect(usernameInput).toHaveDisplayValue('');
    expect(passwordInput).toHaveDisplayValue('');
    expect(usernameError).not.toBeInTheDocument();
    expect(passwordError).not.toBeInTheDocument();

    fireEvent.change(usernameInput, { target: { value: 'babundo' } });

    const usernameInputAfterChange = screen.getByTestId('login-username');
    expect(usernameInputAfterChange).toHaveDisplayValue('babundo');

    const loginButtonElement = screen.getByTestId('login-button');

    fireEvent.click(loginButtonElement);

    const usernameErrorAfterButtonPress =
      screen.queryByText(/Username is required/i);
    const passwordErrorAfterButtonPress =
      screen.getByText(/Password is required/i);

    expect(usernameErrorAfterButtonPress).not.toBeInTheDocument();
    expect(passwordErrorAfterButtonPress).toBeInTheDocument();
  });
  test('should just show username error message', () => {
    renderWithProviders(<Login />);

    const usernameError = screen.queryByText(/Username is required/i);
    const passwordError = screen.queryByText(/Password is required/i);
    const usernameInput = screen.getByTestId('login-username');
    const passwordInput = screen.getByTestId('login-password');

    expect(usernameInput).toHaveDisplayValue('');
    expect(passwordInput).toHaveDisplayValue('');
    expect(usernameError).not.toBeInTheDocument();
    expect(passwordError).not.toBeInTheDocument();

    fireEvent.change(passwordInput, { target: { value: 'babundoPassword' } });

    const usernameInputAfterChange = screen.getByTestId('login-password');
    expect(usernameInputAfterChange).toHaveDisplayValue('babundoPassword');

    const loginButtonElement = screen.getByTestId('login-button');

    fireEvent.click(loginButtonElement);

    const usernameErrorAfterButtonPress =
      screen.queryByText(/Username is required/i);
    const passwordErrorAfterButtonPress =
      screen.queryByText(/Password is required/i);

    expect(usernameErrorAfterButtonPress).toBeInTheDocument();
    expect(passwordErrorAfterButtonPress).not.toBeInTheDocument();
  });
  test('should login when all values are filled', async () => {
    renderWithProviders(<Login />);

    const usernameInput = screen.getByTestId('login-username');
    const passwordInput = screen.getByTestId('login-password');

    fireEvent.change(usernameInput, { target: { value: 'babundo7492' } });
    fireEvent.change(passwordInput, { target: { value: '1234' } });

    const loginButtonElement = screen.getByTestId('login-button');

    fireEvent.click(loginButtonElement);

    const usernameErrorAfterButtonPress =
      screen.queryByText(/Username is required/i);
    const passwordErrorAfterButtonPress =
      screen.queryByText(/Password is required/i);

    expect(usernameErrorAfterButtonPress).not.toBeInTheDocument();
    expect(passwordErrorAfterButtonPress).not.toBeInTheDocument();
  });
  test('should test if animation was called', async () => {
    const { container } = renderWithProviders(<Login />);

    const loginButtonElement = screen.getByTestId('login-button');
    const testAnimation = screen.getByTestId('login-username');

    expect(testAnimation).not.toHaveClass('animate-shaking-error');

    fireEvent.click(loginButtonElement);

    const testAnimationAfterClick = screen.getByTestId('login-username');

    await waitFor(() => {
      expect(testAnimationAfterClick).toHaveClass('animate-shaking-error');
    });
  });
});
