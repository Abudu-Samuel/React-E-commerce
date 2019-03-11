import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import PaystackButton from "react-paystack";

class App extends Component {
  state = {
    email: "foobar@example.com" // customer email
  };

  callback = response => {
    console.log(response); // card charged successfully, get reference here
    this.props.clearCart();
    this.props.history.push("/");
  };

  close = () => {
    console.log("Payment closed");
  };

  getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const total = Math.floor(value.cartTotal) * 35900;
            return (
              <p>
                <PaystackButton
                  text="Make Payment"
                  class="payButton"
                  callback={this.callback}
                  close={this.close}
                  disabled={false}
                  embed={false}
                  reference={this.getReference()}
                  email={this.state.email}
                  amount={total}
                  paystackkey={process.env.REACT_APP_PAYSTACK_KEY}
                  tag="button"
                />
              </p>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default App;
