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
import { EkipaProps, ekipe } from './Components/SeznamEkip';
import { Igralec, IgralecProps } from './Components/Igralec';
import { Opozorilo } from './Components/Opozorilo';
import { Info } from './Components/Info';

export interface SeznamIgralcevProps {
  team: EkipaProps;
}

export const SeznamIgralcev = ({ team }: SeznamIgralcevProps) => {
  /*
    const { ekipaId } = useParams();
    //@ts-ignore
    const ekipa: EkipaProps = ekipe.find((e) => e.id === parseInt(ekipaId));
*/

  return (
    <div>
      {team.igralci.map((igralec) => (
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
    </div>
  );
};
export const Ekipa = ({ team }: SeznamIgralcevProps) => {
  /*
    const { ekipaId } = useParams();

    //@ts-ignore
    const ekipa: EkipaProps = ekipe.find((e) => e.id === parseInt(ekipaId));
*/

  return (
    <>
      <h2>IME EKIPE - {team ? team.title : 'ni podatka'}</h2>
      {team && (
        <div>
          <h3>Leto ustanovitve: {team.letoUstanovitve}</h3>
          <h3>Direktor: {team.direktor}</h3>
          <h3>Trener: {team.trener}</h3>
          <h2>Igralci:</h2>
          <div>
            {team.igralci.map((igralec) => (
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
          </div>
          <Opozorilo steviloIgralcev={team.igralci.length} />
          <Info steviloIgralcev={team.igralci.length} />
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
        element: <Ekipa team={ekipe[0]} />,
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
