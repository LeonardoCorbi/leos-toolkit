import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Dimensions from '../Pages/Dimensions'
import FontREM from '../Pages/FontREM'
import GoldenEight from '../Pages/GoldenEight'
import Menu from '../Pages/Menu'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/menu" component={Menu}/>

      <Route exact path="/toolkit/dimensions" component={Dimensions}/>
      <Route exact path="/toolkit/rem" component={FontREM}/>
      <Route exact path="/toolkit/goldeneight" component={GoldenEight}/>
    </BrowserRouter>
  )
}

export default Routes