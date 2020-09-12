import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { Flipper, Flipped } from "react-flip-toolkit";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => setFullScreen((prevState) => !prevState);

  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const Pic = ({ toggleFullScreen, image }) => (
    <Flipped flipId="pic">
      <div onClick={toggleFullScreen}>
        <img className="checkoutProduct__image" src={image} alt="" />
      </div>
    </Flipped>
  );

  const FullScreenPic = ({ toggleFullScreen, image }) => (
    <Flipped flipId="pic">
      <div className="full-screen-pic" onClick={toggleFullScreen}>
        <img className="checkoutProduct__imageFull" src={image} alt="" />
      </div>
    </Flipped>
  );

  return (
    <div className="checkoutProduct">
      <Flipper flipKey={fullScreen}>
        {fullScreen ? (
          <FullScreenPic toggleFullScreen={toggleFullScreen} image={image} />
        ) : (
          <Pic toggleFullScreen={toggleFullScreen} image={image} />
        )}
      </Flipper>

      {/* <img className="checkoutProduct__image" src={image} alt="" /> */}
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
