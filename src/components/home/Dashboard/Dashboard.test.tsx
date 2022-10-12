import { describe, vi } from 'vitest';
import { screen } from '@testing-library/react';
import 'whatwg-fetch';
import Dashboard from './Dashboard';
import { renderWithProviders } from '../../../app/test.utils';

vi.mock('react-auth-kit', () => ({
  useAuthUser: () => vi.fn(() => ({ name: 'babundo', email: 'babundo' })),
}));

describe('Dashboard', () => {
  test('Render Login', () => {
    renderWithProviders(<Dashboard />);

    const dashboard = screen.getByText(/What's up!/i);
    const helloUser = screen.getByText(/Hello babundo/i);

    expect(dashboard).toBeInTheDocument();
    expect(helloUser).toBeInTheDocument();
  });
});
