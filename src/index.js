import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Ensure it's pointing to App.jsx
import './index.css';     // Tailwind CSS (already there if you followed earlier)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
