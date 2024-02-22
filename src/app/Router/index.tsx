/* eslint-disable import/prefer-default-export */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '@ui/pages/Home';

import { routes } from './routes';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
