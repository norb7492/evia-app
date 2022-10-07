import { createServer, Model } from 'miragejs';

createServer({
  models: {
    user: Model,
  },
  seeds(server) {
    server.create('user', {
      id: 1,
      username: 'babundo7492',
      password: '1234',
      name: 'babundo',
    });
  },
  routes() {
    this.namespace = 'api';

    this.post('/login', (schema, request) => {
      let { username, password } = JSON.parse(request.requestBody);

      if (!username || !password) {
        return new Response(
          400,
          {},
          { errors: ['usernam and password should be filled'] }
        );
      }

      let foundUser = schema.users.findBy({ username, password });

      if (!foundUser) {
        return new Response(401, {}, { errors: ['user not found'] });
      }

      return {
        message: 'Welcome back',
        email: 'babundo7492@gmail.com',
        name: 'babundo',
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjUxNTU3ODgsImV4cCI6MTY5NjY5MTc4OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.EX4O1MqiwnUWh03ipnlgsNyHKNfnXGXGe5hV_xJuV2c',
      };
    });
  },
});
