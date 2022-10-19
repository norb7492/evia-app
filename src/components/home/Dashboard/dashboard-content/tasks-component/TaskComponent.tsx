import { Task } from '../../../../../types/TaskType';
import { useGetAllTasksQuery } from '../../service/dashboardServiceSlice';
import TaskItem from './task-item/TaskItem';

function renderTaskItems(tasksData?: Task[]) {
  if (tasksData) {
    return tasksData.map((task) => (
      <TaskItem
        key={task.id}
        id={task.id}
        taskName={task.taskName}
        finishedDate={task.finishedDate}
        deadline={task.deadline}
      />
    ));
  }
}

function TasksComponent() {
  const { data: tasks } = useGetAllTasksQuery();

  return (
    <div className='bg-[#252020] rounded-xl w-[450px] h-[400px]'>
      <div className='flex justify-around'>
        <div className='py-5'>
          <p className='text-xl text-white font-bold'>Task Status:</p>
        </div>
        {/* legend text and colors start */}
        <div>
          <div className='flex space-x-4 text-white font-bold'>
            <p>New</p>
            <p>Working</p>
            <p>Done</p>
          </div>
          <div className='flex justify-center space-x-11 py-2 '>
            <div className='rounded-full bg-[#2544E5] h-5 w-5'></div>
            <div className='rounded-full bg-[#DDE525] h-5 w-5'></div>
            <div className='rounded-full bg-[#136A04] h-5 w-5'></div>
          </div>
        </div>
        {/* legends and colors end */}

        <div className='text-xl py-3 font-bold text-white'>
          <p>My Tasks</p>
        </div>
      </div>
      {renderTaskItems(tasks)}
    </div>
  );
}

export default TasksComponent;
