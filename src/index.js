import React from 'react';
import ReactDOM from 'react-dom/client';
import {  CurrentComponent } from './components/currentComponent';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <CurrentComponent/>

    </BrowserRouter>

  </React.StrictMode>
);


