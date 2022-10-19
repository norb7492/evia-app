import { AiOutlineProject } from 'react-icons/ai';

function ProjectsComponent() {
  return (
    <div className='bg-[#252020] rounded-xl w-[450px] h-[400px]'>
      <div className='flex justify-end text-xl py-3 font-bold text-white px-4'>
        Projects
      </div>
      <hr />
      <div
        id='project-item'
        className='hover:cursor-pointer text-white text-2xl flex justify-start'
      >
        <div className='flex w-auto py-4 px-4'>
          <div id='project-icon'>
            <AiOutlineProject />
          </div>
          <div className='px-4'>Evia Task Management</div>
        </div>
      </div>

      <div
        id='project-item'
        className='hover:cursor-pointer text-white text-2xl flex justify-start'
      >
        <div className='flex w-auto py-4 px-4'>
          <div id='project-icon'>
            <AiOutlineProject />
          </div>
          <div className='px-4'>Lidl Dashboard</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
