import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { setupStore } from './app/store';
import { Provider } from 'react-redux';
import { AuthProvider } from 'react-auth-kit';
import './index.css';
import './mirage-mock-server/server';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={setupStore()}>
    <React.StrictMode>
      <AuthProvider
        authType={'cookie'}
        authName={'_auth'}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </React.StrictMode>
  </Provider>
);
