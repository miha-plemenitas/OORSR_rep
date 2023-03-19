import * as React from 'react';
import { Igralec } from '../Igralec';
import { Opozorilo } from '../Opozorilo';
import { Info } from '../Info';
import { Outlet } from 'react-router-dom';

export const Main = () => {
  return (
    <div style={{ border: '1px solid red' }}>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
