import React from "react";
import "./Home.css";
import Product from "./Product";
//1:35
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-Mzc4NDcxNzYt-w1500._CB410650290_.jpg"
          alt="546"
        />
        <div className="home__row">
          <Product
            id={1}
            title="Tfdsf sdf könxd"
            price={29.56}
            image="https://s02.static.libri.hu/cover/8f/5/6608546_5.jpg"
            rating={5}
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
