import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Flipper, Flipped } from "react-flip-toolkit";

function Product({ id, title, image, price, rating }) {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => setFullScreen((prevState) => !prevState);

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
        <img className="product__imageFull" src={image} alt="" />
      </div>
    </Flipped>
  );
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>  
      </div>
      <Flipper flipKey={fullScreen}>
        {fullScreen ? (
          <FullScreenPic
            toggleFullScreen={toggleFullScreen}
            price={price}
            title={title}
            rating={rating}
            image={image}
          />
        ) : (
          <Pic toggleFullScreen={toggleFullScreen} image={image} />
        )}
      </Flipper>
      {/* <img src={image} alt="im not working" /> */}
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
