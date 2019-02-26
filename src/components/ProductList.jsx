import React, { Component, Fragment } from "react";
import { Title } from "./Title";
import Product from "./Product";
import { ProductConsumer } from "../context";

export default class componentName extends Component {
  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value =>
                  value.products.map(product => (
                    <Product product={product} key={product.id} />
                  ))
                }
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
