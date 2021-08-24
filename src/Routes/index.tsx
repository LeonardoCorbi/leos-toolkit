import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Bio from '../Pages/Bio'
import Botcoin from '../Pages/Botcoin'
import Dimensions from '../Pages/Dimensions'
import FontREM from '../Pages/FontREM'
import FontTest from '../Pages/FontTest'
import GoldenEight from '../Pages/GoldenEight'
import Menu from '../Pages/Menu'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Bio}/>
      <Route exact path="/dimensions" component={Dimensions}/>
      <Route exact path="/REM" component={FontREM}/>
      <Route exact path="/pixelPerfect" component={GoldenEight}/>
      <Route exact path="/fontTest" component={FontTest}/>
      <Route exact path="/botcoin" component={Botcoin}/>
    </BrowserRouter>
  )
}

export default Routes