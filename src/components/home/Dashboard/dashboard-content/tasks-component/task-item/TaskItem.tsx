import { Task } from '../../../../../../types/TaskType';

function TaskItem({ id, taskName, finishedDate, deadline }: Task) {
  return (
    <div
      id='task-row'
      className='hover:cursor-pointer'
    >
      <div className='flex border border-4 border-[#136a04] bg-white rounded-xl w-[450px] py-2 justify-around'>
        <span className='text-[#C2BBBB] font-bold text-xl self-center'>
          {id}
        </span>
        <span className='text-xl self-center'>{taskName}</span>
        <div className='flex flex-col'>
          <span>Finished at:</span>
          <span>{finishedDate}</span>
        </div>
        <div className='flex flex-col'>
          <span>Deadline:</span>
          <span>{deadline}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
