import React, { useState } from 'react';
import Navbar from "../components/navbar";


const PaymentPage = () => {
    const [paymentData, setPaymentData] = useState({
        paymentId: '',
        totalAmount: '',
        paymentType: '',
        paymentStatus: '',
        paymentDateTime: '',
        userId: '',
    });
    <Navbar />
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({ ...paymentData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment Data:', paymentData);
        // Add logic to handle form submission
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4 text-primary">Payment Details</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="paymentId" className="form-label">Payment ID:</label>
                                    <input
                                        type="text"
                                        id="paymentId"
                                        name="paymentId"
                                        className="form-control"
                                        value={paymentData.paymentId}
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
                                        value={paymentData.totalAmount}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="paymentType" className="form-label">Payment Type:</label>
                                    <select
                                        id="paymentType"
                                        name="paymentType"
                                        className="form-select"
                                        value={paymentData.paymentType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Payment Type</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Debit Card">Debit Card</option>
                                        <option value="PayPal">PayPal</option>
                                        <option value="Cash">Cash</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="paymentStatus" className="form-label">Payment Status:</label>
                                    <select
                                        id="paymentStatus"
                                        name="paymentStatus"
                                        className="form-select"
                                        value={paymentData.paymentStatus}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Failed">Failed</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="paymentDateTime" className="form-label">Payment Date & Time:</label>
                                    <input
                                        type="datetime-local"
                                        id="paymentDateTime"
                                        name="paymentDateTime"
                                        className="form-control"
                                        value={paymentData.paymentDateTime}
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
                                        value={paymentData.userId}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Pay</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
