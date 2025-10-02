import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PATHS } from './routePaths';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    // BrowserRouter hanya dibutuhkan sekali di level tertinggi
    <BrowserRouter>
        <Routes>
          
          <Route path={PATHS.HOME} element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;