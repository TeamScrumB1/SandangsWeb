import React from 'react'
import "./style.css"

function sayHello() {
    alert('You clicked me!');
  }

function Button() {
  return (
    <div className='button'>
    <button onClick={sayHello} className='btn-primary'>View</button>
    </div>
  )
}

export default Button