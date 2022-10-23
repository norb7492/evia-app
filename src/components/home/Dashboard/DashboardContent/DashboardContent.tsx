import Calendar from '../../Calendar/Calendar';
import MessagesComponent from './MessagesComponent/MessagesComponent';
import ProjectsComponent from './ProjectsComponent/ProjectsComponent';
import TasksComponent from './TasksComponnet/TaskComponent';

function DashboardContent() {
  return (
    <div className='bg-slate-700 h-3/4 m-4 rounded-xl p-6'>
      <section className='grid gap-10 grid-cols-2 grid-rows-2 justify-items-stretch grid-flow-col md:grid-flow-row sm:grid-flow-row'>
        <TasksComponent />
        <Calendar/>
        <MessagesComponent />
        <ProjectsComponent />
      </section>
    </div>
  );
}

export default DashboardContent;
