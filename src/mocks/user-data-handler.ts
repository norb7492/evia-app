import { rest } from 'msw';

export const mockUserData = {
  user: {
    username: 'babundo7492',
    name: 'babundo',
  },
};

export const userDataHandler = [
  rest.post('http://localhost:3000/api/login', (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(mockUserData), ctx.delay(50));
  }),
];
