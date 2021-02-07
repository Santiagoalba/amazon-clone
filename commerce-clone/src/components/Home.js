import React from "react";
import "../css/Home.css";
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
          <Product id="12341" title='The lean startup dsadasl,dñas,dlñas{,dñasñd,aslñd,lasñ,dñlas,dñlas,dñla'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
            rating={5}
          />
          <Product id="123443432" title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
            rating={5}
          />
          <Product id="876543" title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
            rating={5}
          />
        </div>
        <div className="home__row"><Product id="49194" title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
            rating={5}
          />
          <Product id="2141243" title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
            rating={5}
          /><Product id="99993" title='The lean startup'
          price={29.99}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
          rating={5}
        />
        <Product id="321123" title='The lean startup'
          price={29.99}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
          rating={5}
        /></div>

        <div className="home__row">
        <Product id="12454565441" title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
            rating={5}
          />
          <Product id="125654654" title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
