import React from 'react';
import {
  Route, Routes as Router, Navigate,
} from 'react-router-dom';
import Bio from '../Pages/Bio';
import Dimensions from '../Pages/Dimensions';
import FigmaCursor from '../Pages/FigmaCursor';
import FontREM from '../Pages/FontREM';
import FontTest from '../Pages/FontTest';
import GoldenEight from '../Pages/GoldenEight';
import NotFound from '../Pages/NotFound';
import Pallets from '../Pages/Shades';

const Routes: React.FC = () => (
  <Router>
    <Route path="/" element={<Navigate to="/Home/index.tsx" />} />
    <Route path="Home">
      <Route path="index.tsx" element={<Bio />} />
    </Route>
    <Route path="Projects">
      <Route path="dimensions.tsx" element={<Dimensions />} />
      <Route path="rem.tsx" element={<FontREM />} />
      <Route path="pixel-perfect.tsx" element={<GoldenEight />} />
      <Route path="font-test.tsx" element={<FontTest />} />
      <Route path="pallets.tsx" element={<Pallets />} />
    </Route>
    <Route path="/sandbox" element={<FigmaCursor />} />
    <Route path="*" element={<NotFound />} />
  </Router>
);

export default Routes;
