import { createServer, Model } from 'miragejs';
import userRoutes from './user/user-routes';
import userCreate from './user/user-create';
import taskCreate from './tasks/task-create';
import taskRoutes from './tasks/task-route';

createServer({
  models: {
    user: Model,
    task: Model,
  },
  seeds(server) {
    userCreate(server);
    taskCreate(server);
  },
  routes() {
    this.namespace = 'api';
    userRoutes(this);
    taskRoutes(this);
  },
});
