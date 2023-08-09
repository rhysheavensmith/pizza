import React from "react";
import "./pizza.css";

export default function Menu({ data, orderPizza }) {
  return (
    <div className="pizzas" onClick={orderPizza}>
      <img src={`./${data.photoName}`} alt="pizza image" />
      <div className="pizza-info">
        <h1>{data.name}</h1>
        <h2>{data.ingredients}</h2>
        {data.soldOut ? (
          <h2 id="sold-out">Sold Out</h2>
        ) : (
          <h1>${data.price.toFixed(2)}</h1>
        )}
      </div>
    </div>
  );
}
