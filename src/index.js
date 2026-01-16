import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import DateCourseApp from './DateCourseApp';

function App() {
  return (
    <>
      <DateCourseApp />
      <Analytics />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
