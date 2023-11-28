import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app.tsx';
import './main.scss';
import { Provider } from 'react-redux';
import { appStore } from './store/store.ts';
import { BrowserRouter as Router } from 'react-router-dom';
import './config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={appStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
