import * as React from 'react';
import { Igralec } from '../Igralec';
import { Opozorilo } from '../Opozorilo';
import { Info } from '../Info';
import { Outlet } from 'react-router-dom';

interface EkipaProps {
  letoUstanovitve: string;
  direktor: string;
  trener: string;
}

interface Igralec {
  ime: string;
  starost: number;
  stDresa: number;
  pozicija: string;
  poskodovan: boolean;
}

export const Main = ({ letoUstanovitve, direktor, trener }: EkipaProps) => {
  const [igralci, setIgralci] = React.useState<Igralec[]>([
    {
      ime: 'Kepa Arrizabalaga',
      starost: 24,
      stDresa: 10,
      pozicija: 'Napadalec',
      poskodovan: false,
    },
    {
      ime: 'Thiago Silva',
      starost: 28,
      stDresa: 5,
      pozicija: 'Vezist',
      poskodovan: true,
    },
    {
      ime: 'Reece James',
      starost: 30,
      stDresa: 2,
      pozicija: 'Branilec',
      poskodovan: false,
    },
    {
      ime: 'César Azpilicueta',
      starost: 24,
      stDresa: 10,
      pozicija: 'Napadalec',
      poskodovan: false,
    },
    {
      ime: 'Christian Pulisic',
      starost: 28,
      stDresa: 5,
      pozicija: 'Vezist',
      poskodovan: true,
    },
    {
      ime: 'Mason Mount',
      starost: 30,
      stDresa: 2,
      pozicija: 'Branilec',
      poskodovan: false,
    },
    {
      ime: 'Kai Havertz',
      starost: 24,
      stDresa: 10,
      pozicija: 'Napadalec',
      poskodovan: false,
    },
    {
      ime: 'Raheem Sterling',
      starost: 28,
      stDresa: 5,
      pozicija: 'Vezist',
      poskodovan: true,
    },
    {
      ime: 'João Félix',
      starost: 30,
      stDresa: 2,
      pozicija: 'Branilec',
      poskodovan: false,
    },
    {
      ime: 'Conor Gallagher',
      starost: 24,
      stDresa: 10,
      pozicija: 'Napadalec',
      poskodovan: false,
    },
    {
      ime: 'Hakim Ziyech',
      starost: 24,
      stDresa: 10,
      pozicija: 'Napadalec',
      poskodovan: false,
    },
  ]);

  return (
    <div style={{ border: '1px solid red' }}>
      <div>
        <Outlet />
      </div>
      <div>
        <h3>Leto Ustanovitve: {letoUstanovitve}</h3>
        <h3>Direktor: {direktor}</h3>
        <h3>Trener: {trener}</h3>
      </div>
      <div>
        <h3>Igralci:</h3>

        <ul>
          {igralci.map((igralec) => (
            <li key={igralec.ime}>
              <Igralec
                ime={igralec.ime}
                starost={igralec.starost}
                stDresa={igralec.stDresa}
                pozicija={igralec.pozicija}
                poskodovan={igralec.poskodovan}
              />
            </li>
          ))}
        </ul>
      </div>
      <Opozorilo steviloIgralcev={igralci.length} />

      <Info steviloIgralcev={igralci.length} />
    </div>
  );
};
