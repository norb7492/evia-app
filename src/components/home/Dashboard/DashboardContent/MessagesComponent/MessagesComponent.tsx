function MessagesComponent() {
  return (
    <div className='bg-[#252020] rounded-xl w-[450px] h-[400px]'>
      <div className='flex justify-end text-xl py-3 font-bold text-white px-4'>
        Messages
      </div>
      <hr />
      <div
        id='user-message-item'
        className='hover:cursor-pointer text-white'
      >
        <div className='flex w-auto py-4 px-4'>
          <div
            id='user-picture'
            className=' border border-4 rounded-full'
          >
            <img
              src='https://randomuser.me/api/portraits/women/39.jpg'
              alt=''
              className='rounded-full h-20'
            />
          </div>
          <div className='flex flex-col px-4 justify-center'>
            <div className='text-2xl font-bold'>Kia Mhalifa</div>
            <div id='user-message-field'>Hahaha, it was so funny!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesComponent;
