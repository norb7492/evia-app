import { Route, Routes } from 'react-router';
import './App.css';

import Home from './components/home/Home';
import Login from './components/login/Login';
import { RequireAuth } from 'react-auth-kit';
import { Navigate } from 'react-router-dom';
import Calendar from './components/home/calendar/Calendar';
import Dashboard from './components/home/dashboard/Dashboard';
import Projects from './components/home/projects/Projects';
import MyTasks from './components/home/my-tasks/MyTasks';
import Team from './components/home/team/Team';
import Statistics from './components/home/statistics/Statistics';
import Settings from './components/home/settings/Settings';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <RequireAuth loginPath='/login'>
            <Home />
          </RequireAuth>
        }
      >
        <Route
          path='/'
          element={
            <Navigate
              to='dashboard'
              replace
            />
          }
        />
        <Route
          path='dashboard'
          element={<Dashboard />}
        />
        <Route
          path='projects'
          element={<Projects />}
        />
        <Route
          path='mytasks'
          element={<MyTasks />}
        />
        <Route
          path='calendar'
          element={<Calendar />}
        />
        <Route
          path='team'
          element={<Team />}
        />
        <Route
          path='statistics'
          element={<Statistics />}
        />
        <Route
          path='settings'
          element={<Settings />}
        />
      </Route>
      <Route
        path='login'
        element={<Login />}
      />
    </Routes>
  );
}

export default App;
