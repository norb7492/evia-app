import { createServer, Model } from 'miragejs';
import userRoutes from './user/user-routes';
import userCreate from './user/user-create';

createServer({
  models: {
    user: Model,
  },
  seeds(server) {
    userCreate(server);
  },
  routes() {
    this.namespace = 'api';
    userRoutes(this);
  },
});
