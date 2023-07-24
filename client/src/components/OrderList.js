import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <main>
      <h2>Lista de Pedidos</h2>
      {orders.map((order) => (
        <div key={order._id}>
          <p><b>ID:</b> {order._id}</p>
          <p>Cliente: {order.client}</p>
          {/* Add other relevant order details */}
        </div>
      ))}
    </main>
  );
};

export default OrderList;