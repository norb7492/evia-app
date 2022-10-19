export default function (server) {
  server.get('/tasks', (schema, request) => {
    const foundTasks = schema.tasks.all();
    return foundTasks.models;
  });
}
