import { apiSlice } from '../../../../app/services/apiSlice';
import { Task } from '../../../../types/TaskType';

export const dashboardServiceSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTasks: builder.query<Task[], void>({
      query: () => '/tasks',
    }),
  }),
});

export const { useGetAllTasksQuery } = dashboardServiceSlice;
