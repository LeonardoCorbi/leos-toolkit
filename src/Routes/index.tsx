import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Dimensions from '../Pages/Dimensions'
import Menu from '../Pages/Menu'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/menu" component={Menu}/>
      <Route exact path="/toolkit/dimensions" component={Dimensions}/>
    </BrowserRouter>
  )
}

export default Routes