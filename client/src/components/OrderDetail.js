import React, { useState } from 'react';
import axios from 'axios';

const OrderDetail = () => {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);

  const handleFetchOrder = async () => {
    try {
      const response = await axios.get(`/api/orders/${orderId}`);
      setOrder(response.data);
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  };

  return (
    <div>
      <h2>Order Details</h2>
      <input
        type="text"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        placeholder="Enter Order ID"
      />
      <button onClick={handleFetchOrder}>Fetch Order</button>
      {order && (
        <div>
          <p>Order ID: {order._id}</p>
          <p>Client: {order.client}</p>
          {/* Add other relevant order details */}
        </div>
      )}
    </div>
  );
};

export default OrderDetail;