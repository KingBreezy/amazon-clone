import React from "react";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42392668_.jpg"
          alt="im not working"
        />
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
        </div>
        <div className="checkout__items">
          {basket.map((index) => {
            return (
              <CheckoutProduct
                key={index.id}
                id={index.id}
                title={index.title}
                image={index.image}
                price={index.price}
                rating={index.rating}
              />
            );
          })}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
