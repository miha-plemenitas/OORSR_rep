import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ekipe } from './index';

export const SeznamEkip = () => {
  return (
    <div style={{ border: '1px solid red' }}>
      <div>
        {ekipe.map((e) => (
          <Link key={e.id} to={`/ekipa/${e.id}`}>
            {e.title} |{' '}
          </Link>
        ))}
      </div>
    </div>
  );
};
