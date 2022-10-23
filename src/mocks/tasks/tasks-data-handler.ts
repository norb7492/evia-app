import { rest } from 'msw';

export const mockTaskData = [
  {
    id: 1,
    taskName: 'SEO Key Analysis',
    taskProject: 'Task Manager',
    taskFinishedAt: '2022-09-27',
    taskDeadline: '2022-10-03',
  },
];

export const taskDataHandler = [
  rest.get('http://localhost:3000/api/tasks', (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(mockTaskData), ctx.delay(50));
  }),
];
