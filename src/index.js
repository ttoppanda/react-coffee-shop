import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router';
// import express from 'express';
// import cors from 'cors';
// import knex from 'knex';
// import reportWebVitals from './reportWebVitals';

// const db = knex({
//   client: 'pg',
//   connection: {
//     host : process.env.host,
//     database : process.env.database,
//     port : process.env.port,
//     user : process.env.user,
//     password : process.env.password,
//   },
// });

// const app = express();

// app.use(cors());

// app.get('/', (req, res) => res.send('Home Route'));

// const port = process.env.port || 5000;

// app.listen (port, () => console.log(`Server running on port ${port}, 
// http://localhost:${port}`));

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
