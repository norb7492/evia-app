import { apiSlice } from '../../../app/services/apiSlice';

export const loginServiceSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (loginForm) => ({
        url: '/login',
        method: 'POST',
        body: loginForm,
      }),
    }),
  }),
});

export const { useSignInMutation } = loginServiceSlice;
