
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cartItems = location.state?.cartItems || [];

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => {
    return total + parseFloat(item.price.replace('₹', ''));
  }, 0);

  const handleConfirmPurchase = () => {
    // Redirect to the order confirmation page
    navigate('/order-confirmation');
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <p>You have {cartItems.length} item(s) in your cart.</p>
      
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>

      <h3>Total Amount: ₹{totalAmount}</h3>
      
      {/* Add further checkout logic here, e.g., payment processing */}
      <button  onClick={handleConfirmPurchase}  className="btn btn-success">Confirm Purchase</button>
    </div>
  );
};

export default Checkout;



/*
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Checkout() {
  const cart = useSelector((state) => state.cart)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    // get the total amount
    let total = 0
    for (const item of cart.items) {
      total += item.rent
    }
    setTotal(total)
  }, [cart.items]) // Adding cart.items as a dependency to recalculate total when cart changes

  return (
    <div>
      <h2 className='page-title'>Checkout</h2>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          {cart.items.map((item) => (
            <div className='row' key={item.id}> {/* Added a unique key for each item }
            <div style={{ fontWeight: 'bold' }} className='col'>
            {item.title}
          </div>
          <div className='col'>₹ {item.rent}</div>
        </div>
      ))}
      <hr />
      <div className='row'>
        <div className='col'>Total Price</div>
        <div className='col'>₹ {total}</div>
      </div>
      <hr />
      <div className='row'>
        <div className='col'>Delivery charges</div>
        <div className='col'>₹ 50</div>
      </div>
      <hr />
      <div className='row'>
        <div className='col'>Total Due</div>
        <div className='col'>₹ {total + 50}</div>
      </div>
    </div>
    <div className='col'></div>
  </div>
</div>
)
}

export default Checkout
*/


