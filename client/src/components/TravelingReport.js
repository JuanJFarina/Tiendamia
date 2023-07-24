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
    <main>
      <h2>Reporte de Pedidos en Viaje</h2>
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
      <button onClick={handleFetchReport}>Obtener Reporte</button>
      {orders.map((order) => (
        <div key={order._id}>
          <p><b>ID:</b> {order._id}</p>
          <p><b>Cliente:</b> {order.client}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </main>
  );
};

export default TravelingReport;