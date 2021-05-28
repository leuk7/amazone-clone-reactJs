import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="Iphone 11 Pro. Reinvent the futur of smartphone "
            price={999.99}
            image="https://m.media-amazon.com/images/I/61WZOhN1vZL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="PS5. The Next Generation Consol. Support RayTracing and High Speed Disk reading"
            price={499.99}
            image="https://m.media-amazon.com/images/I/61AyKaKa4TL._AC_UL320_.jpg"
            rating={6}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Tenco Table. The most affordable for you"
            price={59.99}
            image="https://m.media-amazon.com/images/I/71FQnC2frpL._AC_UL320_.jpg"
            rating={2}
          />

          <Product
            id="4"
            title="Exercice Book BAC, English"
            price={9.99}
            image="https://m.media-amazon.com/images/I/61BJYO5bYLL._AC_UL320_.jpg"
            rating={4}
          />

          <Product
            id="5"
            title="Nike Strike Ballon. Découvrez les Ballon de football Nike Strike"
            price={6.99}
            image="https://m.media-amazon.com/images/I/51Ke4B8pMQL._AC_UL320_.jpg"
            rating={1}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Range Rover SVR Sport. Elle fournit un niveau puissance inégalée grâce à son moteur V8 de 575 ch CEE."
            price={39999.99}
            image="https://webfiles.luxauto.lu/pictures/occasions/x/974632_1--5.jpg"
            rating={7}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
