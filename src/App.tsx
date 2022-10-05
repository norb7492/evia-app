import { Route, Routes } from 'react-router';
import './App.css';

import Home from './components/home/Home';
import Login from './components/login/Login';
import RequireAuth from './hooks/RequireAuth';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path='login'
        element={<Login />}
      />
    </Routes>
  );
}

export default App;
