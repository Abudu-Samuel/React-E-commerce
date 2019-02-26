import React, { Component, createContext } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => ({
      products: tempProducts
    }));
  };

  handleDetail = () => {
    console.log("from handle detail");
  };

  addToCart = () => {
    console.log("from add to cart");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductProvider, ProductConsumer };
