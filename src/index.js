import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Authentication from './components/Pages/Authentication/Authentication';
import Database from './components/Pages/Database/Database';
import Storage from './components/Pages/Storage/Storage';
import Hosting from './components/Pages/Hosting/Hosting';
import Functions from './components/Pages/Functions/Functions';
import MachineLearning from './components/Pages/MachineLearning/MachineLearning';
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={dashboardTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='authentication' element={<Authentication />} />
            <Route path='database' element={<Database />} />
            <Route path='storage' element={<Storage />} />
            <Route path='hosting' element={<Hosting />} />
            <Route path='functions' element={<Functions />} />
            <Route path='machine-learning' element={<MachineLearning />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
