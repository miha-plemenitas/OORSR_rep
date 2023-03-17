import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from 'react-router-dom';

import { ekipe, IEkipa } from './Components/SeznamEkip';

const Ekipa = () => {
  const { ekipaId } = useParams();

  const ekipa: IEkipa = ekipe.find((e) => e.id === parseInt(ekipaId));

  return <h2>Ime ekipe {ekipa ? ekipa.title : 'ni podatka'}</h2>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/ekipa/:ekipaId',
        element: <Ekipa />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
