import React from "react";
import "../css/Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment__adress">
            <p>{user?.email}</p>
            <p>Calle 123</p>
            <p>Buenos Aires</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <h3>Card Details</h3>
            <form className="payment__card">
              <div>
                <input placeholder="💳Card Number" />
              </div>
              <div className="payment__cardInfo">
                <input placeholder="MM/YY" className="payment__cardMonth" />
                <input placeholder="CVC" className="payment__cardCvc" />
              </div>
            </form>
            <div className="payment__button">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      Order Total: <strong>{value}</strong>
                    </p>
                  </>
                )}
                //Cantidad de decimales
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                //Separador de miles verdadero
                thousandSeparator={true}
                //prefijo o signo del dinero
                prefix={"$"}
              />
              <button>Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
