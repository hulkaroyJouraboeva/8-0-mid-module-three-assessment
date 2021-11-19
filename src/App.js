import React from "react";
import "./App.css";
import Body from "./components/Body";
import Products from "./components/Products";
import productData from "./data/productData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: productData,
      cart: []
    };
  }

  handleAddToCart = (product) => {
    this.setState({
      cart: [product.name, ...this.state.cart]
    })
  }

  render() {
    const products = this.state.products.map((product) => {
      return <Products 
        key={product.id} 
        product={product}
        handleAddToCart={this.handleAddToCart} 
      />;
    });

    return (
      <div className="app">
        {products}
        {this.state.cart.length > 0 ? <Body cart={this.state.cart}/> : <Body /> }
      </div>
    );
  }
}

export default App;
