import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal({basket.length} item) : <strong>{value}</strong>
            </p>
            <small className="subTotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed checkout</button>
    </div>
  );
}

export default SubTotal;
