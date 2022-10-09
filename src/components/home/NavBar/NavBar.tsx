import { MdDashboard } from 'react-icons/md';
import { AiFillProject } from 'react-icons/ai';
import { BsListTask } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { MdOutlineQueryStats } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit';
import { FiPower, FiSettings } from 'react-icons/fi';
function NavBar() {
  const singOut = useSignOut();
  const navigate = useNavigate();

  const logout = () => {
    singOut();
    navigate('/login');
  };

  const Navigation = [
    {
      title: 'Dashboard',
      id: 1,
      link: '/dashboard',
      icon: <MdDashboard />,
    },
    {
      title: 'Projects',
      id: 2,
      link: '/projects',
      icon: <AiFillProject />,
    },
    {
      title: 'My Tasks',
      id: 3,
      link: '/mytasks',
      icon: <BsListTask />,
    },
    {
      title: 'Calendar',
      id: 4,
      link: '/calendar',
      icon: <FaRegCalendarAlt />,
    },
    {
      title: 'Team',
      id: 5,
      link: '/team',
      icon: <RiTeamLine />,
    },
    {
      title: 'Statistics',
      id: 6,
      link: '/statistics',
      icon: <MdOutlineQueryStats />,
    },
    {
      title: 'Settings',
      id: 7,
      link: '/settings',
      icon: <FiSettings />,
    },
  ];

  const liStyling =
    'text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 hover:text-slate-800 rounded-md mt-2';

  return (
    <nav className='pt-6'>
      <ul>
        {Navigation.map((navigation) => (
          <NavLink
            to={navigation.link}
            key={navigation.id}
          >
            <li className={liStyling}>
              <span className='text-2xl block float-left'>
                {navigation.icon}
              </span>
              <span className='text-base font-medium flex-1'>
                {navigation.title}
              </span>
            </li>
          </NavLink>
        ))}
        <li
          className={liStyling}
          onClick={logout}
        >
          <span className='text-2xl block float-left'>
            <FiPower />
          </span>
          <span className='text-base font-medium flex-1'>Get Out</span>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
