import React from "react";
import Categories from "./Categories";
import "./Home.css";
import SliderHome from "./Slider";

const Home = () => {
  return (
    <div >
      <section className="home">
        <div className="d_flex">
          {/* <Categories /> */}
          <SliderHome />
        </div>
      </section>
    </div>
  );
};

export default Home;