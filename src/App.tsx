import { Route, Routes } from 'react-router';
import './App.css';

import Home from './components/home/Home';
import Login from './components/login/Login';
import { RequireAuth } from 'react-auth-kit';
import Dashboard from './components/home/Dashboard/Dashboard';
import Projects from './components/home/Projects/Projects';
import { Navigate } from 'react-router-dom';
import MyTasks from './components/home/MyTasks/MyTasks';
import Calendar from './components/home/Calendar/Calendar';
import Team from './components/home/Team/Team';
import Statistics from './components/home/Statistics/Statistics';
import Settings from './components/home/Settings/Settings';

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
