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
    <main>
      <h2>Detalles de Pedido</h2>
      <input
        type="text"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        placeholder="Ingrese el ID del Pedido"
      />
      <button onClick={handleFetchOrder}>Obtener Pedido</button>
      {order && (
        <div>
          <p>ID: {order._id}</p>
          <p>Cliente: {order.client}</p>
          <p>Status: {order.status}</p>
          <p>Dirección de envío: {order.shippingAddress}</p>
          <p>Promesa de envío: {new Date(order.shippingPromise).toLocaleDateString()}</p>
          <h3>Items:</h3>
          <ul>
            {order.items.map((item) => (
              <li key={item._id}>
                <p>Título: {item.title}</p>
                <p>Descripción: {item.description}</p>
                <p>URL: {item.url}</p>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default OrderDetail;