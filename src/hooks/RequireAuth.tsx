import { useLocation, Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/redux-hooks';
import { RootState } from '../app/store';

type Props = {
  children: JSX.Element;
};

function RequireAuth({ children }: Props) {
  const userData = useAppSelector((state: RootState) => state.userData);

  const location = useLocation();

  if (userData.status === 'loggedout') {
    return (
      <Navigate
        to='/login'
        state={{ path: location.pathname }}
      />
    );
  }

  return children;
}

export default RequireAuth;
