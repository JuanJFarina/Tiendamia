import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TravelingReport = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [orders, setOrders] = useState([]);

  const handleFetchReport = async () => {
    try {
      const response = await axios.get(`/api/reports/traveling-between-dates?startDate=${startDate}&endDate=${endDate}`);
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching report:', error);
    }
  };

  return (
    <div>
      <h2>Traveling Report</h2>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleFetchReport}>Fetch Report</button>
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

export default TravelingReport;