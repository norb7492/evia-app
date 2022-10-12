import { Outlet } from 'react-router-dom';
import eviaOffwhiteLogo from '../../assets/evia_icon_white.png';
import NavBar from './NavBar/NavBar';

function Home() {
  return (
    <div className='flex'>
      <div className=' bg-slate-800 h-auto p-2 pt-8 w-60'>
        <div>
          <img
            src={eviaOffwhiteLogo}
            alt='evia logo offwhite'
          />
        </div>
        <NavBar />
      </div>

      <div className='w-screen'>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
