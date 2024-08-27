import React from 'react';

function PizzaItem({ name, price, imageUrl }) {
  return (
    <div className="pizza-item">
      <img src={imageUrl} alt={name} className="pizza-image" />
      <h3>{name}</h3>
      <p>{price}</p>
      <button className="cart-button">Edit</button>
     <button className="fav-button">Delete</button>
    </div>
  );
}

export default PizzaItem;
