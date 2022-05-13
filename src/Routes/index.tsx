import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';
import Bio from '../Pages/Bio';
import Dimensions from '../Pages/Dimensions';
import FigmaCursor from '../Pages/FigmaCursor';
import FontREM from '../Pages/FontREM';
import FontTest from '../Pages/FontTest';
import GoldenEight from '../Pages/GoldenEight';
import Pallets from '../Pages/Shades';

const Routes: React.FC = () => (
  <Router>
    <Route path="/" element={<Bio />} />
    <Route path="/dimensions" element={<Dimensions />} />
    <Route path="/REM" element={<FontREM />} />
    <Route path="/pixelPerfect" element={<GoldenEight />} />
    <Route path="/fontTest" element={<FontTest />} />
    <Route path="/sandbox" element={<FigmaCursor />} />
    <Route path="/pallets" element={<Pallets />} />
  </Router>
);

export default Routes;
