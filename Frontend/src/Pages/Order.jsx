import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from "../components/navbar";


const Order = () => {
    const [orderData, setOrderData] = useState({
        orderId: '',
        totalAmount: '',
        orderDate: '',
        orderQuantity: '',
        userId: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderData({ ...orderData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order Data:', orderData);
       
    };
    const navigate = useNavigate()

  const onPayment = () => {
    navigate('/payment')
  }
    return (
        
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg border-0">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4">Order details</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="orderId" className="form-label">Order ID:</label>
                                    <input
                                        type="text"
                                        id="orderId"
                                        name="orderId"
                                        className="form-control"
                                        value={orderData.orderId}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="totalAmount" className="form-label">Total Amount:</label>
                                    <input
                                        type="number"
                                        id="totalAmount"
                                        name="totalAmount"
                                        className="form-control"
                                        value={orderData.totalAmount}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="orderDate" className="form-label">Order Date:</label>
                                    <input
                                        type="date"
                                        id="orderDate"
                                        name="orderDate"
                                        className="form-control"
                                        value={orderData.orderDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="orderQuantity" className="form-label">Order Quantity:</label>
                                    <input
                                        type="number"
                                        id="orderQuantity"
                                        name="orderQuantity"
                                        className="form-control"
                                        value={orderData.orderQuantity}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="userId" className="form-label">User ID:</label>
                                    <input
                                        type="text"
                                        id="userId"
                                        name="userId"
                                        className="form-control"
                                        value={orderData.userId}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button onClick={onPayment} type="submit" className="btn btn-primary w-100">Payment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
