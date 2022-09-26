import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './mirage-mock-server/server';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> },
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
