import { describe } from 'vitest';
import { store } from '../store';
import 'whatwg-fetch';
import { setCredentials } from '../../app/slices/userDataSlice';

describe('User Data Reducer', () => {
  it('should check initial values', () => {
    const initialState = {
      userDetails: {
        username: '',
        name: '',
      },
      status: 'loggedout',
    };
    const state = store.getState().userData;
    expect(state).toEqual(initialState);
  });

  it('should set the users submit state', () => {
    store.dispatch(
      setCredentials({
        username: 'babundo7492',
        name: 'babundo',
      })
    );

    const state = store.getState().userData;
    expect(state.userDetails).toEqual({
      username: 'babundo7492',
      name: 'babundo',
    });
    expect(state.status).toBe('loggedin');
  });
});
