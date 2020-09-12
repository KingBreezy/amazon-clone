import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  //my code for finding the subtotal
  /*const calculateTotal = () => {
    let total = 0;
    for (var i = 0; i < basket.length; i++) {
      total = total + basket[i].price;
    }
    return total;
  };
  let subtotal = calculateTotal();*/
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/*hw */}
              Subtotal ({basket?.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //hw
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e=> history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
