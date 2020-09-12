import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src={`${process.env.PUBLIC_URL}/amazon1.jpg`}
          //src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id={32145}
            title="The Lean Startup"
            price={19.99}
            image="https://target.scene7.com/is/image/Target/GUEST_17861f9b-9517-4db1-8915-533b1f530fd5?wid=488&hei=488&fmt=pjpeg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={45678}
            title="AmazonBasics 5-Shelf Shelving Storage Unit"
            price={59.99}
            image="https://m.media-amazon.com/images/I/81PRxoDNmyL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id={78901}
            title="AmazonBasics Collapsible Fabric Storage Cubes Organizer with Handles, Beige - Pack of 6"
            price={17.49}
            image="https://m.media-amazon.com/images/I/71P-UUGAXUL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id={22109}
            title="TAmazonBasics 6-Outlet, 200 Joule Surge Protector Power Strip, 2 Foot, Black - Pack of 2"
            price={12.99}
            image="https://m.media-amazon.com/images/I/81H-dmOxbBL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={33457}
            title="AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
            price={10.99}
            image="https://m.media-amazon.com/images/I/71nDX36Y9UL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id={99087}
            title={`AmazonBasics Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 16" Deep Pockets - Queen, Dark Grey`}
            price={19.99}
            image="https://m.media-amazon.com/images/I/71ROFJE-8nL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
