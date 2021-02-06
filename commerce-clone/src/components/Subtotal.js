import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        //Cantidad de decimales
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        //Separador de miles verdadero
        thousandSeparator={true}
        //prefijo o signo del dinero
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
