import React from "react"
import Dcard from "../discount/Dcard"
import Ddata from "../discount/Ddata"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          {/* <Categories /> */}
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
