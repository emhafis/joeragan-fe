import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/next"

import { PATHS } from './routePaths';
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';

const AppRoutes = () => {
  return (
    // BrowserRouter hanya dibutuhkan sekali di level tertinggi
    <SpeedInsights>
      <BrowserRouter>
        <Routes>

          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ABOUT} element={<About />} />
          <Route path={PATHS.PROJECT} element={<Project />} />

        </Routes>
      </BrowserRouter>
    </SpeedInsights>
  );
};

export default AppRoutes;