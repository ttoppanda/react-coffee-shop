import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router'
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Run({ isStrict, children }) {
  if (isStrict) return <React.StrictMode>{children}</React.StrictMode>;
  return children;
}
root.render(
  <Run isStrict={false}>
    <RouterProvider router={router}/>
  </Run>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
