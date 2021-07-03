import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Bio from '../Pages/Bio'
import Dimensions from '../Pages/Dimensions'
import FontREM from '../Pages/FontREM'
import FontTest from '../Pages/FontTest'
import GoldenEight from '../Pages/GoldenEight'
import Menu from '../Pages/Menu'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Bio}/>
      
      <Route exact path="/menu" component={Menu}/>

      <Route exact path="/toolkit/dimensions" component={Dimensions}/>
      <Route exact path="/toolkit/rem" component={FontREM}/>
      <Route exact path="/toolkit/pixelperfect" component={GoldenEight}/>
      <Route exact path="/toolkit/fonttest" component={FontTest}/>
    </BrowserRouter>
  )
}

export default Routes