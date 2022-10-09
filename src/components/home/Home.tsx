import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

function Home() {
  return (
    <div className='flex'>
      <div className=' bg-slate-800 h-screen p-2 pt-8 w-60'>
        <div>
          <h1 className='float-center text-center text-white'>Evia</h1>
        </div>
        <NavBar />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
