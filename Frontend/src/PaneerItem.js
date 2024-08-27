import React from 'react';

function PaneerItem({ name, price, imageUrl }) {
  return (
    <div className="paneer-item">
      <img src={imageUrl} alt={name} className="paneer-image" />
      <h3>{name}</h3>
      <p>{price}</p>
      <button className="cart-button">Edit</button>
     <button className="fav-button">Delete</button>
    </div>
  );
}

export default PaneerItem;