import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import { useAppDispatch, useAppSelector } from '../../app/redux-hooks';
import { renderWithProviders } from '../../app/test.utils';

describe('Login', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('Render Login', () => {
    renderWithProviders(<Login />);
    const UsernameText = screen.getByText('Username');
    const PasswordText = screen.getByText('Password');
    expect(UsernameText).toBeInTheDocument();
    expect(PasswordText).toBeInTheDocument();
  });
});
