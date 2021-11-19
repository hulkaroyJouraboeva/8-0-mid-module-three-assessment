import React from "react";
import formatPrice from "../helpers/formatPrice";

class Products extends React.Component {

    handleAddToCart2 = () => {
        this.props.handleAddToCart(this.props.product)
    }

    render() {
        const { name, img, description, price } = this.props.product;

        return (
            <div>
                <div className="products">
                    <p>{name}</p>
                    <p>Price: {formatPrice(price)}</p>
                    <button onClick={this.handleAddToCart2}>Add To Cart</button>
                    <img src={img} alt={name}></img>
                    <p>{description}</p>
                </div> 
            </div>
        )
    }
}

export default Products;