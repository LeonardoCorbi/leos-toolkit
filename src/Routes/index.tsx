import React from 'react'
import { BrowserRouter, Route, Routes as Router } from 'react-router-dom'
import Bio from '../Pages/Bio'
import Botcoin from '../Pages/Botcoin'
import Dimensions from '../Pages/Dimensions'
import FontREM from '../Pages/FontREM'
import FontTest from '../Pages/FontTest'
import GoldenEight from '../Pages/GoldenEight'
import FigmaCursor from '../Pages/FigmaCursor'
import Shades from '../Pages/Shades'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Bio />}/>
        <Route path="/dimensions" element={<Dimensions />}/>
        <Route path="/REM" element={<FontREM />}/>
        <Route path="/pixelPerfect" element={<GoldenEight />}/>
        <Route path="/fontTest" element={<FontTest />}/>
        <Route path="/botcoin" element={<Botcoin />}/>
        <Route path="/sandbox" element={<FigmaCursor />}/>
        <Route path="/shades" element={<Shades />}/>
      </Router>
    </BrowserRouter>
  )
}

export default Routes