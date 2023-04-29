// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Product1 from "./components/Product1";
import Product2 from "./components/Product2";

const product1 = {
  name: 'Matches',
  description: 'Remedy for making a fire',
  price: '$0.5',
  amount: 0,
}

const product2 = {
  name: 'Firewood',
  description: 'Remedy for space heating',
  price: '$0.5',
  amount: 200,
}

function App() {
  return (
    <>
      <Product1
      product={product1}/>
      <Product2
      name={product2.name}
      description={product2.description}
      price={product2.price}
      amount={product2.amount}/>
    </>
  );
}

export default App;
