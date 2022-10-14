import { AiOutlineProject } from "react-icons/ai";
import Calendar from "../../Calendar/Calendar";

function DashboardContent() {
  return (
    <div className='bg-slate-700 h-3/4 m-4 rounded-xl p-6'>
      <section className='grid gap-4 grid-cols-2 grid-rows-2 justify-items-center grid-flow-col md:grid-flow-row sm:grid-flow-row'>

        {/* Widget tasks place start */}
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
              <p>
                My Tasks
              </p>
            </div>
          </div>

          <div id='task-row' className='hover:cursor-pointer'>
            <div className='flex border border-4 border-[#136a04] bg-white rounded-xl w-[450px] py-2 justify-around'>
              <span className='text-[#C2BBBB] font-bold text-xl self-center'>
                #01
              </span>
              <span className='text-xl self-center'>
                SEO Key analysis
              </span>
              <div className='flex flex-col'>
                <span>Finished at:</span>
                <span>27 Sep 2022</span>
              </div>
              <div className='flex flex-col'>
                <span>Deadline:</span>
                <span>03 Oct 2022</span>
              </div>
            </div>
          </div>
        </div>
        {/* widget tasks place end */}

        {/* Widget Calendar place start */}
        <div className='bg-[#252020] rounded-xl w-[450px] h-[400px] flex items-center'>
          <div className='flex justify-end text-xl py-3 font-bold text-white px-4'>
            Calendar
          </div>
          <hr className="" />
          <Calendar />
        </div>
        {/* Widget Calendar place end */}

        {/* Widget Chat place start */}
        <div className='bg-[#252020] rounded-xl w-[450px] h-[400px]'>
          <div className='flex justify-end text-xl py-3 font-bold text-white px-4'>
            Messages
          </div>
          <hr />
          <div id='user-message-item' className='hover:cursor-pointer text-white'>
            <div className='flex w-auto py-4 px-4'>
              <div id='user-picture' className=' border border-4 rounded-full'>
                <img src='https://randomuser.me/api/portraits/women/39.jpg' alt='' className='rounded-full h-20' />
              </div>
              <div className='flex flex-col px-4 justify-center'>
                <div className='text-2xl font-bold'>
                  Kia Mhalifa
                </div>
                <div id='user-message-field'>
                  Hahaha, it was so funny!
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* widget chat place end */}


        <div className='bg-[#252020] rounded-xl w-[450px] h-[400px]'>
          <div className='flex justify-end text-xl py-3 font-bold text-white px-4'>
            Projects
          </div>
          <hr />
          <div id='project-item' className='hover:cursor-pointer text-white text-2xl flex justify-start'>
            <div className='flex w-auto py-4 px-4'>
              <div id='project-icon'>
                <AiOutlineProject />
              </div>
              <div className='px-4'>
                Evia Task Management
              </div>
            </div>
          </div>

          <div id='project-item' className='hover:cursor-pointer text-white text-2xl flex justify-start'>
            <div className='flex w-auto py-4 px-4'>
              <div id='project-icon'>
                <AiOutlineProject />
              </div>
              <div className='px-4'>
                Lidl Dashboard
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}

export default DashboardContent;
