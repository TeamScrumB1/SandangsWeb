import React from 'react'
import FRoom from '../FittingRoom/FRoom';
import { useHistory } from "react-router-dom";

function ButtonFroom() {
    let history = useHistory();

  function handleClick() {
    history.push("./FittingRoom/FRoom.jsx");
  }
  return (
    <button onClick={handleClick} className='btn-primary'>Fitting Room</button>
  )
}

export default ButtonFroom