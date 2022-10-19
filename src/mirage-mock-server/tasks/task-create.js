export default function (server) {
  server.create('task', {
    id: 1,
    taskName: 'SEO Key Analysis',
    taskProject: 'Task Manager',
    taskFinishedAt: '2022-09-27',
    taskDeadline: '2022-10-03',
  });
  server.create('task', {
    id: 2,
    taskName: 'My Custom Task',
    taskProject: 'Task Manager Login',
    taskFinishedAt: '2022-09-30',
    taskDeadline: '2022-10-01',
  });
}
