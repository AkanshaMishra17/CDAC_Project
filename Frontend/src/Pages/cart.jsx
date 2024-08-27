import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (location.state && location.state.pizza) {
      // Add the pizza item to the cart
      setCartItems([...cartItems, location.state.pizza]);
    }
  }, [location.state]); // Re-run this effect whenever the location state changes

  const handleCheckout = () => {
    // Implement checkout logic
    console.log('Checking out', cartItems);
    navigate('/checkout', { state: { cartItems } });
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <p>You have {cartItems.length} item(s) in your cart.</p>
      
      <button onClick={handleCheckout} className="btn btn-success">Checkout</button>
      
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;





/*
import { useSelector } from 'react-redux'
import CartItem from '../components/cartItem'
import { Link } from 'react-router-dom'

function Cart() {
  // read cart items from state
  const cart = useSelector((state) => state.cart)

  return (
    <div>
      <h2 className='page-title'>Cart</h2>
      <center>
      <Link to={'/checkout'} className='btn btn-primary'>
        Checkout
      </Link>
      </center>
      <div>
        {cart.items.length > 0 &&
          cart.items.map((item) => {
            return <CartItem property={item} />
          })}

        {cart.items.length == 0 && (
          <h4 className='page-title'>There are no items added to cart</h4>
        )}
      </div>
    </div>
  )
}

export default Cart
*/




/*
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';

// Custom styles for the CartPage
const styles = {
  card: {
    borderRadius: '10px',
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '1.5rem',
  },
  table: {
    marginTop: '20px',
  },
  quantityButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  button: {
    borderRadius: '50%',
    padding: '5px 10px',
    minWidth: '30px',
  },
  checkoutButton: {
    width: '20%',
    padding: '10px',
    fontSize: '1.2rem',
  },
};

const CartPage = () => {
  const initialCartItems = [
    { id: 1, name: 'Paneer Chili', quantity: 2 },
    { id: 2, name: 'Indi Tandoori Pizza', quantity: 1 },
    { id: 3, name: 'Kadai Paneer', quantity: 3 },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };
  const navigate = useNavigate()

  const onProceed = () => {
    navigate('/order')
  }
  return (
    <div className="container mt-5">
      <div className="card shadow" style={styles.card}>
        <div className="card-header" style={styles.cardHeader}>
          <h2 className="mb-0"> Cart</h2>
        </div>
        <div className="card-body">
          <table className="table table-striped table-hover" style={styles.table}>
            <thead className="thead-light">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>
                    <div style={styles.quantityButtons}>
                      <button
                        className="btn btn-outline-secondary"
                        style={styles.button}
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="btn btn-outline-secondary"
                        style={styles.button}
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-2">
            <button onClick={onProceed} className="btn btn-success" style={styles.checkoutButton}>
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
*/
