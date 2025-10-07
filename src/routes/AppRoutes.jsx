import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PATHS } from './routePaths';
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
      <BrowserRouter>
        <Routes>

          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ABOUT} element={<About />} />
          <Route path={PATHS.PROJECT} element={<Project />} />
          <Route path={PATHS.CONTACT} element={<Contact />} />

        </Routes>
      </BrowserRouter>
  );
};

export default AppRoutes;