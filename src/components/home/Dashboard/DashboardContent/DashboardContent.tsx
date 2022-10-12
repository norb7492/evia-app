function DashboardContent() {
  return (
    <div className='bg-slate-700 h-3/4 m-4 rounded-xl p-6'>
      <section className="grid gap-10 grid-cols-2 grid-rows-2 justify-items-stretch grid-flow-col md:grid-flow-row sm:grid-flow-row">
        {/* Widget place start */}
        <div className="bg-[#252020] rounded-xl w-[450px] h-[400px]">
          <div className="flex justify-around">         
          <div className="py-5">
            <p className="text-xl text-white font-bold">Task Status:</p>
          </div>
          {/* legend text and colors start */}
          <div>
            <div className="flex space-x-4 text-white font-bold">
              <p>New</p>
              <p>Working</p>
              <p>Done</p>
            </div>
            <div className="flex justify-center space-x-11 py-2 ">
              <div className="rounded-full bg-[#2544E5] h-5 w-5"></div>
              <div className="rounded-full bg-[#DDE525] h-5 w-5"></div>
              <div className="rounded-full bg-[#136A04] h-5 w-5"></div>
            </div>
          </div>
          {/* legends and colors end */}
          
          <div className="text-xl py-3 font-bold text-white">
            <p>
              My Tasks
            </p>
          </div>
          </div>

          <div id="task-row" className="hover:cursor-pointer">
                <div className="flex border border-4 border-[#136a04] bg-white rounded-xl w-[450px] py-2 justify-around">
              <span className="text-[#C2BBBB] font-bold text-xl self-center">
                #01
              </span>
              <span className="text-xl self-center">
                SEO Key analysis
              </span>
              <div className="flex flex-col">
                <span>Finished at:</span>
                <span>27 Sep 2022</span>
              </div>
              <div className="flex flex-col">
                <span>Deadline:</span>
                <span>03 Oct 2022</span>
              </div>
            </div>
          </div>
        </div>
        {/* widget place end */}

        <div>Widget 2</div>
        <div>Widget 3</div>
        <div>Widget 4</div>
      </section>
    </div>
  );
}

export default DashboardContent;
