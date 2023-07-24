import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApproveAndNearDeliveryReport = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchApproveAndNearDeliveryOrders();
  }, []);

  const fetchApproveAndNearDeliveryOrders = async () => {
    try {
      const response = await axios.get('/api/reports/approve-and-near-delivery');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching report:', error);
    }
  };

  return (
    <main>
      <h2>Reporte de Pedidos Aprobados y por Entregar</h2>
      {orders.map((order) => (
        <div key={order._id}>
          <p><b>ID:</b> {order._id}</p>
          <p><b>Cliente:</b> {order.client}</p>
          <p><b>Status:</b> {order.status}</p>
          <p>Dirección de envío: {order.shippingAddress}</p>
          <p>Promesa de envío: {new Date(order.shippingPromise).toLocaleDateString()}</p>
        </div>
      ))}
    </main>
  );
};

export default ApproveAndNearDeliveryReport;