import React, {Component} from "react";

class Product2 extends Component {
  render() {
    const { name, description, price, amount } = this.props;
    return (
      <article>
        <h1>{name || 'not defined'}</h1>
        <p>{description || 'not defined'}</p>
        <p>Price: {price || 'not defined'}</p>
        <p>Amount: {amount > 0 ? 'are available' : 'not available'}</p>
      </article>
    );
  }
}
export default Product2;
