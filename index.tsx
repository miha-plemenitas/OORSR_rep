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
import { ekipe, EkipaProps } from './Components/SeznamEkip';
import { Igralec } from './Components/Igralec';
import { Opozorilo } from './Components/Opozorilo';
import { Info } from './Components/Info';

interface IgralecProps {
  igralec: Igralec;
}

const Ekipa = () => {
  const { ekipaId } = useParams();

  const ekipa: EkipaProps = ekipe.find((e) => e.id === parseInt(ekipaId));

  return (
    <>
      <h2>IME EKIPE - {ekipa ? ekipa.title : 'ni podatka'}</h2>
      {ekipa && (
        <div>
          <h3>Leto ustanovitve: {ekipa.letoUstanovitve}</h3>
          <h3>Direktor: {ekipa.direktor}</h3>
          <h3>Trener: {ekipa.trener}</h3>
          <h2>Igralci:</h2>
          {ekipa.igralci.map((igralec) => (
            <div key={igralec.ime}>
              <Igralec
                                ime={igralec.ime}
                                starost={igralec.starost}
                                stDresa={igralec.stDresa}
                                pozicija={igralec.pozicija}
                                poskodovan={igralec.poskodovan}
                />
            </div>
          ))}
          <Opozorilo steviloIgralcev={ekipa.igralci.length} />
          <Info steviloIgralcev={ekipa.igralci.length} />
        </div>
      )}
    </>
  );
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

reportWebVitals();
