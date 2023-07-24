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
    <div>
      <h2>Approve and Near Delivery Report</h2>
      {orders.map((order) => (
        <div key={order._id}>
          <p>Order ID: {order._id}</p>
          <p>Client: {order.client}</p>
          {/* Add other relevant order details */}
        </div>
      ))}
    </div>
  );
};

export default ApproveAndNearDeliveryReport;