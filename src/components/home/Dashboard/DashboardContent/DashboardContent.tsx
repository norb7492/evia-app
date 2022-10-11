function DashboardContent() {
  return (
    <div className='bg-slate-800 h-3/4 m-4 rounded-xl p-6'>
      <div className='grid grid-cols-2 grid-rows-6 gap-8'>
        <div className='bg-black rounded-lg row-start-1 row-span-3'>
          <div className='h-20'></div>
        </div>
        <div className='bg-black rounded-lg row-start-1 row-span-3'>
          <div className='h-20'></div>
        </div>
        <div className='bg-black rounded-lg row-start-4 row-span-3'>
          <div className='h-20'></div>
        </div>
        <div className='bg-black rounded-lg row-start-4 row-span-1'>
          <div className='h-20'></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
