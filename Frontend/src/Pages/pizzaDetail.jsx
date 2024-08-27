import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mexican_pizza from './../assets/mexican.jpg';
import paneer_tikka_pizza from './../assets/panner_tikka.jpg';
import italian_pizza from './../assets/italian_pizza.jpg';

const PizzaDetail = () => {
  const { pizzaId } = useParams();
  const navigate = useNavigate();

  const pizzaDetails = {
    'mexican': {
      name: 'Mexican Pizza',
      image: mexican_pizza,
      price: '₹150',
      description: 'Spicy and delicious Mexican style pizza with loads of toppings.'
    },
    'tikka-paneer': {
      name: 'Tandoori Paneer Tikka Pizza',
      image: paneer_tikka_pizza,
      price: '₹140',
      description: 'Authentic tandoori paneer with a blend of spices.'
    },
    'veg-paprika': {
      name: 'Veg Paprika Pizza',
      image: italian_pizza,
      price: '₹140',
      description: 'Classic Italian pizza with fresh ingredients.'
    }
  };

  const pizza = pizzaDetails[pizzaId] || {};

  const onOrder = () => {
    // Navigate to the Cart page, passing the pizza data as state
    navigate('/cart', { state: { pizza } });
  };

  return (
    <div className="container">
      <h2>{pizza.name}</h2>
      {pizza.image && (
        <img src={pizza.image} alt={pizza.name} className="img-fluid mb-3" />
      )}
      <p>{pizza.description}</p>
      <p><strong>Price: </strong>{pizza.price}</p>
      <button onClick={onOrder} className="btn btn-primary">Order Now</button>
    </div>
  );
};

export default PizzaDetail;




/*
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import mexican_pizza from './../assets/mexican.jpg';
import paneer_tikka_pizza from './../assets/panner_tikka.jpg';
import italian_pizza from './../assets/italian_pizza.jpg';
import { Link, useNavigate } from 'react-router-dom'

function PizzaDetail() {
  const { pizzaId } = useParams();
  const location = useLocation();
  
  const navigate = useNavigate()

  const onOrder = () => {
    navigate('/cart')
  }
 
  const pizzaDetails = {
    'mexican': {
      name: 'Mexican Pizza',
      image: mexican_pizza,
      price: '₹150',
      description: 'Spicy and delicious Mexican style pizza with loads of toppings.'
    },
    'tikka-paneer': {
      name: 'Tandoori Paneer Tikka Pizza',
      image: paneer_tikka_pizza ,
      price: '₹140',
      description: 'Authentic tandoori paneer with a blend of spices.'
    },
    'veg-paprika': {
      name: 'Veg Paprika Pizza',
      image:italian_pizza,
      price: '₹140',
      description: 'Classic Italian pizza with fresh ingredients.'
    }
    
  };

  const pizza = pizzaDetails[pizzaId] || {};

  return (
    <div className="container">
      <h2>{pizza.name}</h2>
      {pizza.image && (
        <img src={pizza.image} alt={pizza.name} className="img-fluid mb-3" />
      )}
      <p>{pizza.description}</p>
      <p><strong>Price: </strong>{pizza.price}</p>
      <button onClick={onOrder} className="btn btn-primary">Order Now</button>
    </div>
  );
}

export default PizzaDetail;
*/
