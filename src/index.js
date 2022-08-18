import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import CompleteApp from './CompleteApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CompleteApp />
  </React.StrictMode>
);
