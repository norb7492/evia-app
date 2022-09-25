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
        return new Response(400, {}, { errors: ['user not found'] });
      }

      return {
        user: {
          username: foundUser.attrs.username,
          name: foundUser.attrs.name,
        },
      };
    });
  },
});
