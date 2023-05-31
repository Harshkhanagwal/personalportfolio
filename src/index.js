import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalData } from './context/context';
import './style/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <GlobalData>
      <App />
    </GlobalData>

);

