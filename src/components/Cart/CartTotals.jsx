import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PaystackButton from "./PaystackButton";

export const CartTotals = ({ value, history }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 text-capitalize ml-md-auto text-right col-sm-8">
            <Link to="/">
              <button
                className="btn btn-outline-danger px-5 text-capitalize mb-3"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <PaystackButton history={history} clearCart={clearCart} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
