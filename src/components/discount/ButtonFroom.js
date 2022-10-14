import React from 'react'
import { BrowserRouter, Switch, Route, Link, useHistory} from "react-router-dom"
import FittingRoom from '../FittingRoom/FRoom'


function ButtonFroom() {
   
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route component={FittingRoom} path="/fittingroom" />
      </Switch>
      </BrowserRouter>
      <div>
        <Link to="/fittingroom">
        <button onClick={{}} className='btn-primary'>Fitting Room</button>  
        </Link>
      </div>
      
   </div>
    
  )
}

export default ButtonFroom