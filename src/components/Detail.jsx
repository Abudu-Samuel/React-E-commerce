import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            inCart,
            title
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue ">
                  <h1>{title}</h1>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto my-3 col-md-6">
                    <img src={img} alt="product" className="img-fluid" />
                  </div>
                  <div className="col-10 mx-auto text-capitalize my-3 col-md-6">
                    <h2>model: {title}</h2>
                    <h4 className="text-title text-muted text-uppercase mt-3 mb-2">
                      made by : <span className="uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        price : <span>$</span> {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about the product :
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <div>
                      <Link to="/">
                        <ButtonContainer>back to products</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                        disabled={inCart ? true : false}
                      >
                        {inCart ? "in cart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
