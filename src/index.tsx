import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/output.css';
import App from './App';
import NavProvider from './context/NavContext';
import {Nav} from './components/Navbar/Nav';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavProvider>
    <Nav />
    <App/>
    </NavProvider>
  </React.StrictMode>
);


