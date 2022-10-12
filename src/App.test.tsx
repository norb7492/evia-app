import { describe } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import 'whatwg-fetch';
import { server } from './mocks/server';
import { renderWithAuthProviders } from './app/test.utils';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App Routing', () => {
  test('Should Route to Login screen if user is not logged in', () => {
    const homeRoute = '/';
    renderWithAuthProviders(
      <MemoryRouter initialEntries={[homeRoute]}>
        <App />
      </MemoryRouter>
    );

    const usernameText = screen.queryByText(/E-mail/i);
    const passwordText = screen.queryByText(/Password/i);

    expect(usernameText).toBeInTheDocument();
    expect(passwordText).toBeInTheDocument();
  });
  test('Should Route to Home screen when user is logged in', async () => {
    const homeRoute = '/';
    renderWithAuthProviders(
      <MemoryRouter initialEntries={[homeRoute]}>
        <App />
      </MemoryRouter>
    );

    const emailInput = screen.getByTestId('login-email');
    const passwordInput = screen.getByTestId('login-password');

    fireEvent.change(emailInput, {
      target: { value: 'babundo7492@gmail.com' },
    });
    fireEvent.change(passwordInput, { target: { value: '1234' } });

    const loginButtonElement = screen.getByTestId('login-button');

    fireEvent.click(loginButtonElement);

    await waitFor(() => {
      const homeScreenText = screen.queryByText(/What's up!/i);
      expect(homeScreenText).toBeInTheDocument();
    });
  });
});
