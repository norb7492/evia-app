import { describe } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { server } from '../../mocks/server';
import 'whatwg-fetch';
import Login from './Login';
import { renderWithAuthProviders } from '../../app/test.utils';
import { MemoryRouter } from 'react-router-dom';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

function renderWithRouter() {
  const homeRoute = '/';

  return (
    <MemoryRouter initialEntries={[homeRoute]}>
      <Login />
    </MemoryRouter>
  );
}

describe('Login', () => {
  test('Render Login', () => {
    renderWithAuthProviders(renderWithRouter());

    const emailText = screen.getByText(/E-mail/i);
    const passwordText = screen.getByText(/Password/i);
    const emailInput = screen.getByTestId('login-email');
    const passwordInput = screen.getByTestId('login-password');
    const emailError = screen.queryByText(/Hey! Type your email./i);
    const passwordError = screen.queryByRole('password-error', {
      name: /I need your password there./i,
    });

    expect(emailText).toBeInTheDocument();
    expect(passwordText).toBeInTheDocument();
    expect(emailInput).toHaveDisplayValue('');
    expect(passwordInput).toHaveDisplayValue('');
    expect(emailError).not.toBeInTheDocument();
    expect(passwordError).not.toBeInTheDocument();
  });
  test('should show login error if press login button without passing any value', () => {
    renderWithAuthProviders(renderWithRouter());

    const emailError = screen.queryByText(/Hey! Type your email./i);
    const passwordError = screen.queryByRole('password-error', {
      name: /I need your password there./i,
    });

    expect(emailError).not.toBeInTheDocument();
    expect(passwordError).not.toBeInTheDocument();

    const loginButtonElement = screen.getByTestId('login-button');

    fireEvent.click(loginButtonElement);

    const emailErrorAfterButtonPress = screen.getByText(
      /Hey! Type your email./i
    );
    const passwordErrorAfterButtonPress = screen.getByText(
      /I need your password there./i
    );

    expect(emailErrorAfterButtonPress).toBeInTheDocument();
    expect(passwordErrorAfterButtonPress).toBeInTheDocument();
  });
  test('should just show password error message', () => {
    renderWithAuthProviders(renderWithRouter());

    const emailError = screen.queryByText(/Hey! Type your email./i);
    const passwordError = screen.queryByText(/I need your password there./i);
    const emailInput = screen.getByTestId('login-email');
    const passwordInput = screen.getByTestId('login-password');

    expect(emailInput).toHaveDisplayValue('');
    expect(passwordInput).toHaveDisplayValue('');
    expect(emailError).not.toBeInTheDocument();
    expect(passwordError).not.toBeInTheDocument();

    fireEvent.change(emailInput, {
      target: { value: 'babundo7492@gmail.com' },
    });

    const emailInputAfterChange = screen.getByTestId('login-email');
    expect(emailInputAfterChange).toHaveDisplayValue('babundo7492@gmail.com');

    const loginButtonElement = screen.getByTestId('login-button');

    fireEvent.click(loginButtonElement);

    const emailErrorAfterButtonPress = screen.queryByText(
      /Hey! Type your email./i
    );
    const passwordErrorAfterButtonPress = screen.queryByText(
      /I need your password there./i
    );

    expect(emailErrorAfterButtonPress).not.toBeInTheDocument();
    expect(passwordErrorAfterButtonPress).toBeInTheDocument();
  });
  test('should just show email error message', () => {
    renderWithAuthProviders(renderWithRouter());

    const emailError = screen.queryByText(/Hey! Type your email./i);
    const passwordError = screen.queryByText(/I need your password there./i);
    const emailInput = screen.getByTestId('login-email');
    const passwordInput = screen.getByTestId('login-password');

    expect(emailInput).toHaveDisplayValue('');
    expect(passwordInput).toHaveDisplayValue('');
    expect(emailError).not.toBeInTheDocument();
    expect(passwordError).not.toBeInTheDocument();

    fireEvent.change(passwordInput, { target: { value: 'babundoPassword' } });

    const emailInputAfterChange = screen.getByTestId('login-password');
    expect(emailInputAfterChange).toHaveDisplayValue('babundoPassword');

    const loginButtonElement = screen.getByTestId('login-button');

    fireEvent.click(loginButtonElement);

    const emailErrorAfterButtonPress = screen.queryByText(
      /Hey! Type your email./i
    );
    const passwordErrorAfterButtonPress = screen.queryByRole('password-error', {
      name: /I need your password there./i,
    });

    expect(emailErrorAfterButtonPress).toBeInTheDocument();
    expect(passwordErrorAfterButtonPress).not.toBeInTheDocument();
  });
  test('should login when all values are filled', async () => {
    renderWithAuthProviders(renderWithRouter());

    const emailInput = screen.getByTestId('login-email');
    const passwordInput = screen.getByTestId('login-password');

    fireEvent.change(emailInput, {
      target: { value: 'babundo7492@gmail.com' },
    });
    fireEvent.change(passwordInput, { target: { value: '1234' } });

    const loginButtonElement = screen.getByTestId('login-button');

    fireEvent.click(loginButtonElement);

    const emailErrorAfterButtonPress = screen.queryByText(
      /Hey! Type your email./i
    );
    const passwordErrorAfterButtonPress = screen.queryByText(
      /I need your password there./i
    );

    expect(emailErrorAfterButtonPress).not.toBeInTheDocument();
    expect(passwordErrorAfterButtonPress).not.toBeInTheDocument();
  });
  test('should test if animation was called', async () => {
    renderWithAuthProviders(renderWithRouter());

    const loginButtonElement = screen.getByTestId('login-button');
    const testAnimation = screen.getByTestId('login-email');

    expect(testAnimation).not.toHaveClass('animate-shaking-error');

    fireEvent.click(loginButtonElement);

    const testAnimationAfterClick = screen.getByTestId('login-email');

    await waitFor(() => {
      expect(testAnimationAfterClick).toHaveClass('animate-shaking-error');
    });
  });
});
